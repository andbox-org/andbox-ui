import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
    exports: 'named',
    sourcemap: true,
    preserveModules: true,
  },
  external: ['react', 'react/jsx-runtime'],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      declaration: true,
      rootDir: 'src',
      declarationDir: 'dist',
    }),
  ],
};
