import replace from 'rollup-plugin-replace'

export default {
  input: './src/index.js',
  plugins: [
    replace({ 'process.browser': !!process.env.BROWSER })
  ]
}