import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SectionTitle } from '../SectionTitle';

describe('SectionTitle', () => {
  it('renders standard variant by default', () => {
    render(<SectionTitle title="Test Title" />);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Test Title');
  });

  it('renders subtitle when provided', () => {
    render(<SectionTitle title="Main Title" subtitle="Subtitle" />);

    expect(screen.getByText('Main Title')).toBeInTheDocument();
    expect(screen.getByText('Subtitle')).toBeInTheDocument();
  });

  it('renders initial variant correctly', () => {
    render(<SectionTitle title="Hello" subtitle="World" variant="initial" />);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveClass('title-main');
  });

  it('renders tech variant with correct styling', () => {
    render(<SectionTitle title="Tech Stack" variant="tech" />);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveClass('text-slate-900');
  });

  it('renders contact variant with border styling', () => {
    render(<SectionTitle title="Contact" subtitle="Get In Touch" variant="contact" />);

    const contactHeading = screen.getByText('Contact');
    expect(contactHeading).toHaveClass('border-b-2', 'border-accent-primary');

    const subtitle = screen.getByText('Get In Touch');
    expect(subtitle).toBeInTheDocument();
  });

  it('applies custom className when provided', () => {
    render(<SectionTitle title="Test" className="custom-class" />);

    const container = screen.getByRole('heading', { level: 2 }).closest('div');
    expect(container).toHaveClass('custom-class');
  });

  it('renders decorative elements for standard variant', () => {
    const { container } = render(<SectionTitle title="Test" variant="standard" />);

    const decorativeElements = container.querySelectorAll('.bg-accent-primary');
    expect(decorativeElements).toHaveLength(2);
  });
});