import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    outDir: 'dist',
    target: 'es2016',
    dts: true,
    splitting: true,
    sourcemap: true,
    clean: true,
    tsconfig: 'tsconfig.build.json',
})
