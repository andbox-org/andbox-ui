import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
    exports: 'named',
    sourcemap: true,
    preserveModules: true,
  },
  plugins: [typescript({
    declaration: true,
    rootDir: 'src',
    declarationDir: 'dist',
  })]
};
