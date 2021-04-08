module.exports = {
  purge: ['./src/**/*.html', './src/**/*.ts'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "signin-background": "url('src/assets/cool-background.svg')",
        "home-background": "url('src/assets/home-background.jpg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')
,require('@tailwindcss/typography')
],
};
