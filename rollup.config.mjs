import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    exports: 'named',
    sourcemap: true,
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
    postcss({
      extract: true,
      minimize: true,
      extensions: ['.css'],
      plugins: [],
    }),
  ],
};
