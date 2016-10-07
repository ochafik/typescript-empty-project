import typescript from 'rollup-plugin-typescript';
import uglify from 'rollup-plugin-uglify';
import filesize from 'rollup-plugin-filesize';

export default {
  entry: './main.ts',
  format: 'iife',
  dest: 'build/bundle.js',
  sourceMap: true,
  plugins: [
    typescript({
      // Force usage of same version of typescript as the project:
      typescript: require('typescript')
    }),
    uglify({sourceMap: true}),
    filesize(),
  ]
}
