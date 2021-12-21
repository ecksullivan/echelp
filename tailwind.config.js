const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './resources/**/*.antlers.html',
      './resources/**/*.blade.php',
      './content/**/*.md'
    ]
  },
  theme: {

  },
  variants: {},

  plugins: [
    require('@tailwindcss/typography'),
  ],
}
