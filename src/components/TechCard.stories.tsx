import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { TechCard } from './TechCard';

const meta = {
  title: 'Components/TechCard',
  component: TechCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An accessible card component for displaying technology items with optional descriptions.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ul className="purr:list-none purr:p-4">
        <Story />
      </ul>
    ),
  ],
} satisfies Meta<typeof TechCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    item: {
      name: 'React',
      url: 'https://reactjs.org',
    },
  },
};

export const WithDescription: Story = {
  args: {
    item: {
      name: 'TypeScript',
      url: 'https://typescriptlang.org',
      description: 'Static type checker for JavaScript',
    },
  },
};

export const LongDescription: Story = {
  args: {
    item: {
      name: 'Next.js',
      url: 'https://nextjs.org',
      description: 'The React framework for production applications with server-side rendering',
    },
  },
};

export const TechGrid: Story = {
  render: () => (
    <ul className="purr:grid purr:grid-cols-2 purr:gap-2 purr:p-4 purr:max-w-md">
      <TechCard
        item={{
          name: 'React',
          url: 'https://reactjs.org',
        }}
      />
      <TechCard
        item={{
          name: 'TypeScript',
          url: 'https://typescriptlang.org',
          description: 'Static typing',
        }}
      />
      <TechCard
        item={{
          name: 'TailwindCSS',
          url: 'https://tailwindcss.com',
          description: 'Utility-first CSS',
        }}
      />
      <TechCard
        item={{
          name: 'Storybook',
          url: 'https://storybook.js.org',
        }}
      />
    </ul>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

// Interaction and Accessibility Tests
export const InteractionTest: Story = {
  args: {
    item: {
      name: 'React',
      url: 'https://reactjs.org',
      description: 'A JavaScript library for building user interfaces',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link');
    const listItem = canvas.getByRole('button');

    // Test keyboard navigation
    await userEvent.tab();
    await expect(link).toHaveFocus();

    // Test ARIA label contains description
    await expect(link).toHaveAttribute('aria-label', 'Learn more about React: A JavaScript library for building user interfaces');

    // Test hover effects
    await userEvent.hover(listItem);

    // Verify external link attributes
    await expect(link).toHaveAttribute('target', '_blank');
    await expect(link).toHaveAttribute('rel', 'noreferrer');

    // Test content is visible
    await expect(canvas.getByText('React')).toBeInTheDocument();
    await expect(canvas.getByText('A JavaScript library for building user interfaces')).toBeInTheDocument();
  },
};

// Accessibility focused test
export const AccessibilityTest: Story = {
  args: {
    item: {
      name: 'Vue.js',
      url: 'https://vuejs.org',
      description: 'Progressive JavaScript framework',
    },
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
          {
            id: 'keyboard-navigation',
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

    // Test keyboard navigation through tab
    await userEvent.tab();
    const link = canvas.getByRole('link');
    await expect(link).toHaveFocus();

    // Test Enter key activation
    await userEvent.keyboard('{Enter}');
  },
};

// Visual regression test with multiple states
export const VisualStates: Story = {
  render: () => (
    <div className="purr:space-y-4 purr:p-4">
      <h3 className="purr:text-lg purr:font-semibold">Different TechCard States</h3>
      <div className="purr:space-y-4">
        <div>
          <span className="purr:text-sm purr:text-gray-600 purr:block purr:mb-2">Normal State:</span>
          <ul>
            <TechCard item={{ name: 'React', url: 'https://reactjs.org' }} />
          </ul>
        </div>
        <div>
          <span className="purr:text-sm purr:text-gray-600 purr:block purr:mb-2">With Description:</span>
          <ul>
            <TechCard item={{
              name: 'TypeScript',
              url: 'https://typescriptlang.org',
              description: 'Typed JavaScript at scale'
            }} />
          </ul>
        </div>
        <div>
          <span className="purr:text-sm purr:text-gray-600 purr:block purr:mb-2">Long Description:</span>
          <ul>
            <TechCard item={{
              name: 'Next.js',
              url: 'https://nextjs.org',
              description: 'The React framework for production applications with many advanced features'
            }} />
          </ul>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    chromatic: {
      modes: {
        desktop: { viewport: 'desktop' },
        mobile: { viewport: 'mobile' }
      }
    },
  },
};