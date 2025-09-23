import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TechCard } from '../TechCard';

describe('TechCard', () => {
  const mockItem = {
    name: 'React',
    url: 'https://reactjs.org',
  };

  it('renders tech name', () => {
    render(<TechCard item={mockItem} />);

    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('renders with description when provided', () => {
    const itemWithDescription = {
      ...mockItem,
      description: 'JavaScript library for building UIs',
    };

    render(<TechCard item={itemWithDescription} />);

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('JavaScript library for building UIs')).toBeInTheDocument();
  });

  it('has correct link attributes', () => {
    render(<TechCard item={mockItem} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://reactjs.org');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noreferrer');
  });

  it('has proper accessibility attributes', () => {
    const itemWithDescription = {
      ...mockItem,
      description: 'JavaScript library',
    };

    render(<TechCard item={itemWithDescription} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('aria-label', 'Learn more about React: JavaScript library');
  });

  it('has aria-label without description', () => {
    render(<TechCard item={mockItem} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('aria-label', 'Learn more about React');
  });

  it('applies custom className when provided', () => {
    render(<TechCard item={mockItem} className="custom-class" />);

    const listItem = screen.getByRole('button');
    expect(listItem).toHaveClass('custom-class');
  });

  it('renders as list item with button role', () => {
    render(<TechCard item={mockItem} />);

    const listItem = screen.getByRole('button');
    expect(listItem.tagName).toBe('LI');
  });

  it('has proper styling classes', () => {
    render(<TechCard item={mockItem} />);

    const listItem = screen.getByRole('button');
    expect(listItem).toHaveClass('hover:bg-accent-secondary');
    expect(listItem).toHaveClass('purr:transition-colors');
    expect(listItem).toHaveClass('focus-within:ring-2');
  });
});