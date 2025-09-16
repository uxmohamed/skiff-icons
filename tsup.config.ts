import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'Icons/index.ts',
    icons: 'Icons/icons.ts'
  },
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  treeshake: true,
  minify: false,
});
