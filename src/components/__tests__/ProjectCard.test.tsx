import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProjectCard } from '../ProjectCard';

describe('ProjectCard', () => {
  const mockProps = {
    title: 'Test Project',
    description: 'Test description',
    url: 'https://example.com',
    technologies: ['React', 'TypeScript'],
  };

  it('renders project title and description', () => {
    render(<ProjectCard {...mockProps} />);

    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('renders technologies with correct limit', () => {
    render(<ProjectCard {...mockProps} />);

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('shows overflow indicator for many technologies', () => {
    const propsWithManyTechs = {
      ...mockProps,
      technologies: ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'Node.js'],
    };

    render(<ProjectCard {...propsWithManyTechs} />);

    expect(screen.getByText('+2')).toBeInTheDocument();
  });

  it('has correct link attributes for security', () => {
    render(<ProjectCard {...mockProps} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders with image when provided', () => {
    const propsWithImage = {
      ...mockProps,
      image: 'https://example.com/image.jpg',
    };

    render(<ProjectCard {...propsWithImage} />);

    const imageContainer = screen.getByRole('link').querySelector('[style*="background-image"]');
    expect(imageContainer).toBeTruthy();
  });

  it('applies custom className when provided', () => {
    render(<ProjectCard {...mockProps} className="custom-class" />);

    const link = screen.getByRole('link');
    expect(link).toHaveClass('custom-class');
  });
});