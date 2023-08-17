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
      helvetica: ['Helvetica', 'sans-serif'],
      playfair: ['PlayfairDisplay', 'Helvetica', 'sans-serif'],
      poppins: ['Poppins', 'Helvetica', 'sans-serif']
    },

    extend: {
      colors: {
        'blue-10': '#002D73',
        'gray-10': '#2C2D2E',
        'red-10': '#FF4040'
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