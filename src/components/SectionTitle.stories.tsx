import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { SectionTitle } from './SectionTitle';

const meta = {
  title: 'Components/SectionTitle',
  component: SectionTitle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible section title component with multiple visual variants and accessibility features.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['initial', 'standard', 'tech', 'contact'],
    },
    className: { control: 'text' },
  },
} satisfies Meta<typeof SectionTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    title: 'About Me',
    variant: 'standard',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const WithSubtitle: Story = {
  args: {
    title: 'Hello, I\'m',
    subtitle: 'Andre',
    variant: 'initial',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const TechStack: Story = {
  args: {
    title: 'Tech Stack',
    variant: 'tech',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const Contact: Story = {
  args: {
    title: 'Contact',
    subtitle: 'Get In Touch',
    variant: 'contact',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="purr:space-y-8 purr:p-4">
      <div className="purr:bg-gray-900 purr:p-4 purr:rounded">
        <SectionTitle title="Hello, I'm" subtitle="Andre" variant="initial" />
      </div>
      <div className="purr:bg-gray-900 purr:p-4 purr:rounded">
        <SectionTitle title="About Me" variant="standard" />
      </div>
      <div className="purr:bg-white purr:p-4 purr:rounded">
        <SectionTitle title="Tech Stack" variant="tech" />
      </div>
      <div className="purr:bg-gray-900 purr:p-4 purr:rounded">
        <SectionTitle title="Contact" subtitle="Get In Touch" variant="contact" />
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

// Accessibility Test
export const AccessibilityTest: Story = {
  args: {
    title: 'Section Heading',
    subtitle: 'With Subtitle',
    variant: 'standard',
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
            id: 'heading-order',
            enabled: true,
          }
        ]
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Test proper heading structure
    const heading = canvas.getByRole('heading', { level: 2 });
    await expect(heading).toBeInTheDocument();
    await expect(heading).toHaveTextContent('Section Heading');

    // Test subtitle is present
    const subtitle = canvas.getByText('With Subtitle');
    await expect(subtitle).toBeInTheDocument();

    // Test decorative elements are present
    const decorativeLines = canvasElement.querySelectorAll('.bg-accent-primary, .bg-gradient-to-r');
    expect(decorativeLines.length).toBeGreaterThan(0);
  },
};

// Visual Regression Test for all variants
export const VisualRegressionTest: Story = {
  render: () => (
    <div className="purr:space-y-12 purr:p-8">
      <section>
        <h3 className="purr:mb-4 purr:text-lg purr:font-semibold">Initial Variant (Dark Background)</h3>
        <div className="purr:bg-gray-900 purr:p-6 purr:rounded-lg">
          <SectionTitle title="Hello, I'm" subtitle="Developer" variant="initial" />
        </div>
      </section>

      <section>
        <h3 className="purr:mb-4 purr:text-lg purr:font-semibold">Standard Variant (Dark Background)</h3>
        <div className="purr:bg-gray-900 purr:p-6 purr:rounded-lg">
          <SectionTitle title="About Me" variant="standard" />
        </div>
      </section>

      <section>
        <h3 className="purr:mb-4 purr:text-lg purr:font-semibold">Tech Variant (Light Background)</h3>
        <div className="purr:bg-white purr:p-6 purr:rounded-lg purr:border">
          <SectionTitle title="Technologies" variant="tech" />
        </div>
      </section>

      <section>
        <h3 className="purr:mb-4 purr:text-lg purr:font-semibold">Contact Variant (Dark Background)</h3>
        <div className="purr:bg-gray-900 purr:p-6 purr:rounded-lg">
          <SectionTitle title="Contact" subtitle="Get In Touch" variant="contact" />
        </div>
      </section>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    chromatic: {
      modes: {
        desktop: { viewport: 'desktop' },
        tablet: { viewport: 'tablet' },
        mobile: { viewport: 'mobile' }
      },
      delay: 300,
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Verify all variants render correctly
    await expect(canvas.getByText("Hello, I'm")).toBeInTheDocument();
    await expect(canvas.getByText('Developer')).toBeInTheDocument();
    await expect(canvas.getByText('About Me')).toBeInTheDocument();
    await expect(canvas.getByText('Technologies')).toBeInTheDocument();
    await expect(canvas.getByText('Contact')).toBeInTheDocument();
    await expect(canvas.getByText('Get In Touch')).toBeInTheDocument();
  },
};