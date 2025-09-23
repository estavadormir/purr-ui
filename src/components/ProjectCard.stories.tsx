import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { ProjectCard } from './ProjectCard';

const meta = {
  title: 'Components/ProjectCard',
  component: ProjectCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A card component for showcasing projects with hover effects, tech tags, and optional images.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    featured: { control: 'boolean' },
    image: { control: 'text' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Sample Project',
    description: 'This is a sample project description that showcases what this component looks like with typical content.',
    url: 'https://example.com',
    technologies: ['React', 'TypeScript', 'TailwindCSS'],
  },
};

export const WithImage: Story = {
  args: {
    title: 'Project with Image',
    description: 'A project that includes a background image to show the visual variant.',
    url: 'https://example.com',
    technologies: ['Next.js', 'React', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop',
  },
};

export const ManyTechnologies: Story = {
  args: {
    title: 'Complex Project',
    description: 'A project with many technologies to demonstrate the +N overflow behavior.',
    url: 'https://example.com',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Node.js', 'PostgreSQL', 'Redis'],
  },
};

export const LongContent: Story = {
  args: {
    title: 'Project with Very Long Title That Might Wrap',
    description: 'This project has a very long description that will test how the component handles content overflow. It should properly truncate the text with line-clamp-3 and maintain good visual hierarchy throughout the card layout.',
    url: 'https://example.com',
    technologies: ['React', 'TypeScript'],
  },
};

// Interaction Tests
export const InteractionTest: Story = {
  args: {
    title: 'Interactive Project',
    description: 'Click to test interactions and hover effects.',
    url: 'https://example.com',
    technologies: ['React', 'TypeScript', 'Storybook'],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const projectCard = canvas.getByRole('link');

    // Test keyboard navigation
    await userEvent.tab();
    await expect(projectCard).toHaveFocus();

    // Test hover state
    await userEvent.hover(projectCard);

    // Verify accessibility attributes
    await expect(projectCard).toHaveAttribute('target', '_blank');
    await expect(projectCard).toHaveAttribute('rel', 'noopener noreferrer');

    // Test that title is visible
    await expect(canvas.getByText('Interactive Project')).toBeInTheDocument();

    // Test that technologies are displayed
    await expect(canvas.getByText('React')).toBeInTheDocument();
    await expect(canvas.getByText('TypeScript')).toBeInTheDocument();
  },
};

// Visual Regression Test
export const VisualTest: Story = {
  args: {
    title: 'Visual Regression Test',
    description: 'This story is used for visual regression testing.',
    url: 'https://example.com',
    technologies: ['React', 'TypeScript', 'TailwindCSS'],
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop',
  },
  parameters: {
    // Enable visual testing for this story
    chromatic: {
      modes: {
        desktop: { viewport: 'desktop' },
        mobile: { viewport: 'mobile' }
      }
    },
  },
};