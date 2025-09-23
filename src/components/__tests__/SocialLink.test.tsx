import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FaGithub } from 'react-icons/fa';
import { SocialLink } from '../SocialLink';

describe('SocialLink', () => {
  it('renders link with text content', () => {
    render(<SocialLink href="https://github.com">GitHub</SocialLink>);

    const link = screen.getByRole('link');
    expect(link).toHaveTextContent('GitHub');
    expect(link).toHaveAttribute('href', 'https://github.com');
  });

  it('renders with icon when provided', () => {
    render(<SocialLink href="https://github.com" icon={FaGithub}>GitHub</SocialLink>);

    const svg = screen.getByRole('link').querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });

  it('has proper external link attributes', () => {
    render(<SocialLink href="https://github.com">GitHub</SocialLink>);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('uses custom aria-label when provided', () => {
    render(
      <SocialLink href="https://github.com" ariaLabel="Visit my GitHub profile">
        GitHub
      </SocialLink>
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('aria-label', 'Visit my GitHub profile');
  });

  it('falls back to text content for aria-label', () => {
    render(<SocialLink href="https://github.com">GitHub Profile</SocialLink>);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('aria-label', 'GitHub Profile');
  });

  it('uses default aria-label when no text or custom label', () => {
    render(<SocialLink href="https://github.com" icon={FaGithub} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('aria-label', 'Social link');
  });

  it('applies custom className when provided', () => {
    render(<SocialLink href="https://github.com" className="custom-class">GitHub</SocialLink>);

    const link = screen.getByRole('link');
    expect(link).toHaveClass('custom-class');
  });

  it('has proper styling classes', () => {
    render(<SocialLink href="https://github.com">GitHub</SocialLink>);

    const link = screen.getByRole('link');
    expect(link).toHaveClass('hover:text-accent-primary');
    expect(link).toHaveClass('focus:outline-none');
    expect(link).toHaveClass('focus:ring-2');
    expect(link).toHaveClass('purr:transition-colors');
  });
});