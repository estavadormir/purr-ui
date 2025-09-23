# Purr UI

A modern, accessible React component library built with TailwindCSS.

## Features

- **TailwindCSS v4** - Modern utility-first styling approach
- **Accessibility First** - WCAG compliant components with proper ARIA support
- **Well Tested** - Comprehensive test coverage with Vitest
- **Storybook** - Interactive documentation and visual testing
- **TypeScript** - Full type safety and excellent IntelliSense
- **Tree Shakeable** - Optimized bundle size for production
- **Fast** - Minimal runtime overhead and excellent performance

## Installation

```bash
npm install @hairy-studios/purr-ui
# or
pnpm add @hairy-studios/purr-ui
# or
yarn add @hairy-studios/purr-ui
```

## Quick Start

```jsx
import { ProjectCard, SectionTitle, TechCard, SocialLink } from '@hairy-studios/purr-ui';
import '@hairy-studios/purr-ui/styles';

function App() {
  return (
    <div>
      <SectionTitle
        title="My Projects"
        subtitle="Check out what I've been working on"
        variant="standard"
      />

      <ProjectCard
        title="Awesome Project"
        description="A really cool project built with React"
        url="https://github.com/user/project"
        technologies={['React', 'TypeScript', 'TailwindCSS']}
      />
    </div>
  );
}
```

## Components

### ProjectCard
Showcase your projects with beautiful cards including technology tags and hover effects.

### SectionTitle
Versatile section titles with multiple variants (initial, standard, tech, contact).

### TechCard
Display technologies with icons and animations.

### SocialLink
Social media links with hover effects and accessibility features.

## Development

```bash
# Install dependencies
pnpm install

# Start Storybook
pnpm storybook

# Run tests
pnpm test

# Build for production
pnpm build
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT © [Andre](https://github.com/estavadormir)
