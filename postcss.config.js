const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    require('autoprefixer')(),
    purgecss({
      content: ['./**/*.vue']
    })
  ]
}
