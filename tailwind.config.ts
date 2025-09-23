import type { Config } from 'tailwindcss';

const config: Config = {
  prefix: 'purr-',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}',
  ],
};

export default config;