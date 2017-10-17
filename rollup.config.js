import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import svelte from 'rollup-plugin-svelte';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/main.js',
    format: 'iife',
  },
  plugins: [
    eslint({
      include: [
        './src/**/*.js',
      ],
    }),
    svelte({
      // By default, all .html and .svelte files are compiled
      extensions: ['.html'],

      // You can restrict which files are compiled
      // using `include` and `exclude`
      include: 'src/components/**.html',
    }),
    babel({
      include: ['./src/**/*.js'],
    }),
  ],
};
