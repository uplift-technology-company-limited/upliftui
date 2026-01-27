import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/components/ui/index.ts',
    'src/components/uplift/index.ts',
    'src/components/magic/index.ts',
  ],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'next-themes'],
  treeshake: true,
})
