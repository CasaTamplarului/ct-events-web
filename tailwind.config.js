module.exports = {
  mode: 'jit',

  content: [
    'components/**/*.{vue,js}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
    './nuxt.config.{js,ts}',
  ],

  theme: {
    fontFamily: {
      playfair: ['PlayfairDisplay', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif']
    },

    extend: {
      colors: {
        'blue-10': '#002D73',
        'gray-10': '#2C2D2E',
        'red-10': '#FF4040',
        'blue-20': '#528399',
        'blue-30': '#5C93AC'
      },

      maxWidth: {
        '10xl': '120rem'
      },

      borderWidth: {
        '1': '0.63rem'
      },

      borderRadius: {
        '4xl': '2.25rem',
        '5xl': '3.25rem'
      }
    }
  }
}