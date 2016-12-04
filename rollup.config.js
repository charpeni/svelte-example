import svelte from 'rollup-plugin-svelte';
import eslint from 'rollup-plugin-eslint';

export default {
  entry: 'src/main.js',
  dest: 'dist/main.js',
  format: 'iife',
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
  ],
};
