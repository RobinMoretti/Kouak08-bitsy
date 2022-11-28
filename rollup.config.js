import scss from 'rollup-plugin-scss'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'

export default {
	input: 'src/app.js',
	output: {
		file: 'dist/app.js',
		format: 'esm'
	},
	plugins: [
		postcss()
	]
  }