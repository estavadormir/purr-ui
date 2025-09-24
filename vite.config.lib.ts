/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss({ config: './tailwind.config.ts' })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'PurrUI',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'esm' : 'cjs'}.js`,
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'tailwind-merge',
        'lucide-react',
        'react-icons',
        'react-icons/fa',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
          'tailwind-merge': 'tailwindMerge',
          'lucide-react': 'LucideReact',
          'react-icons': 'ReactIcons',
          'react-icons/fa': 'ReactIconsFa',
        },
      },
    },
    outDir: 'dist',
    emptyOutDir: false,
  },
  esbuild: {
    jsx: 'automatic',
  },
});