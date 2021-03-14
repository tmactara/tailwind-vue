module.exports = {
  purge: [
    './src/**/*.vue'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/src/assets/bg.jpg')",
       }),
      fontSize: {
        nav: ['1.5rem', { lineHeight: '4.5' }]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
