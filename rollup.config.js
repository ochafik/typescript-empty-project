import typescript from 'rollup-plugin-typescript';
import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: './main.ts',
  format: 'iife',
  dest: 'build/bundle.js',
  sourceMap: true,
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'immutable': [
            'Iterable',
            'Seq',
            'Collection',
            'Map',
            'OrderedMap',
            'List',
            'Stack',
            'Set',
            'OrderedSet',
            'Record',
            'Range',
            'Repeat',
            'is',
            'fromJS',
        ],
      },
    }),
    // babel({
    //   exclude: 'node_modules/**'
    // }),
    typescript({
      // Force usage of same version of typescript as the project:,
      typescript: require('typescript')
    }),
    // uglify({sourceMap: true}),
  ]
}
