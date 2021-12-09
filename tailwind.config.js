module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './resources/**/*.antlers.html',
      './resources/**/*.blade.php',
      './content/**/*.md'
    ]
  },
  important: true,
  theme: {
    extend: {
      colors: {
        tnblue: '#1260cc',
      }, 
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
