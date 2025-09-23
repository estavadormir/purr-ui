import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { SocialLink } from './SocialLink';

const meta = {
  title: 'Components/SocialLink',
  component: SocialLink,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An accessible social media link component with icon support and hover effects.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    icon: { control: false },
    className: { control: 'text' },
  },
} satisfies Meta<typeof SocialLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GitHub: Story = {
  args: {
    href: 'https://github.com',
    icon: FaGithub,
    children: 'GitHub',
    ariaLabel: 'Visit my GitHub profile',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const LinkedIn: Story = {
  args: {
    href: 'https://linkedin.com',
    icon: FaLinkedin,
    children: 'LinkedIn',
    ariaLabel: 'Connect on LinkedIn',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const EmailOnly: Story = {
  args: {
    href: 'mailto:contact@example.com',
    children: 'contact@example.com',
    ariaLabel: 'Send an email',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const IconOnly: Story = {
  args: {
    href: 'https://twitter.com',
    icon: FaTwitter,
    ariaLabel: 'Follow on Twitter',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const SocialLinks: Story = {
  render: () => (
    <div className="purr:flex purr:flex-col purr:space-y-2 purr:p-4">
      <SocialLink
        href="https://github.com"
        icon={FaGithub}
        ariaLabel="Visit my GitHub profile"
      >
        GitHub
      </SocialLink>
      <SocialLink
        href="https://linkedin.com"
        icon={FaLinkedin}
        ariaLabel="Connect on LinkedIn"
      >
        LinkedIn
      </SocialLink>
      <SocialLink
        href="https://twitter.com"
        icon={FaTwitter}
        ariaLabel="Follow on Twitter"
      >
        Twitter
      </SocialLink>
      <SocialLink
        href="mailto:contact@example.com"
        icon={FaEnvelope}
        ariaLabel="Send an email"
      >
        contact@example.com
      </SocialLink>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'dark' },
  },
};

// Accessibility and Interaction Tests
export const AccessibilityTest: Story = {
  args: {
    href: 'https://github.com/user',
    icon: FaGithub,
    children: 'GitHub Profile',
    ariaLabel: 'Visit my GitHub profile',
  },
  parameters: {
    backgrounds: { default: 'dark' },
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
          {
            id: 'focusable-element',
            enabled: true,
          }
        ]
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link');

    // Test keyboard navigation
    await userEvent.tab();
    await expect(link).toHaveFocus();

    // Test ARIA label
    await expect(link).toHaveAttribute('aria-label', 'Visit my GitHub profile');

    // Test external link attributes
    await expect(link).toHaveAttribute('target', '_blank');
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer');

    // Test hover state
    await userEvent.hover(link);

    // Test that icon is present but hidden from screen readers
    const icon = canvasElement.querySelector('svg');
    await expect(icon).toHaveAttribute('aria-hidden', 'true');
  },
};

// Visual Tests with different states
export const VisualStates: Story = {
  render: () => (
    <div className="purr:space-y-4 purr:p-4">
      <div className="purr:space-y-2">
        <h3 className="purr:text-white purr:text-lg">Normal State</h3>
        <SocialLink href="https://github.com" icon={FaGithub}>GitHub</SocialLink>
      </div>
      <div className="purr:space-y-2">
        <h3 className="purr:text-white purr:text-lg">Focus State (use Tab to navigate)</h3>
        <SocialLink href="https://linkedin.com" icon={FaLinkedin}>LinkedIn</SocialLink>
      </div>
      <div className="purr:space-y-2">
        <h3 className="purr:text-white purr:text-lg">Icon Only</h3>
        <SocialLink href="https://twitter.com" icon={FaTwitter} ariaLabel="Twitter" />
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'dark' },
    chromatic: {
      modes: {
        desktop: { viewport: 'desktop' },
        mobile: { viewport: 'mobile' }
      }
    },
  },
};