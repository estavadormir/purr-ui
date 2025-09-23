# Purr UI

A modern, accessible React component library built with TailwindCSS.

## 📖 Documentation

**[View Live Storybook Documentation](https://estavadormir.github.io/purr-ui)**

Explore all components with interactive examples, accessibility tests, and usage guidelines.

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
npm install @estavadormir/purr-ui
# or
pnpm add @estavadormir/purr-ui
# or
yarn add @estavadormir/purr-ui
```

## Quick Start

```jsx
import { ProjectCard, SectionTitle, TechCard, SocialLink } from '@estavadormir/purr-ui';
import '@estavadormir/purr-ui/styles';

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

```jsx
<ProjectCard
  title="My Awesome App"
  description="A modern web application built with React and TypeScript"
  url="https://github.com/user/project"
  technologies={['React', 'TypeScript', 'TailwindCSS']}
/>
```

### SectionTitle
Versatile section titles with multiple variants (initial, standard, tech, contact).

```jsx
<SectionTitle
  title="About Me"
  subtitle="Learn more about my background"
  variant="standard"
/>
```

### TechCard
Display technologies with icons and animations.

```jsx
<TechCard
  item={{
    name: 'React',
    url: 'https://reactjs.org',
    description: 'A JavaScript library for building user interfaces'
  }}
/>
```

### SocialLink
Social media links with hover effects and accessibility features.

```jsx
<SocialLink
  href="https://github.com/username"
  icon={FaGithub}
  ariaLabel="Visit my GitHub profile"
>
  GitHub
</SocialLink>
```

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

## CI/CD

This package uses GitHub Actions for automated testing, publishing, and documentation:

- **Pull Requests**: Runs tests, linting, and builds on Node.js 20.x
- **Main Branch**: Automatically publishes to NPM after successful tests
- **Storybook**: Automatically deploys documentation to GitHub Pages on main branch
- **Requirements**: NPM_TOKEN secret must be configured in repository settings

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT © [Andre](https://github.com/estavadormir)
