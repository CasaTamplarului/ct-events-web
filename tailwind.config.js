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
      shallota: ['Shallota', 'sans-serif']
    },

    extend: {
      colors: {
        'blue-10': '#002D73',
        'gray-10': '#2C2D2E',
        'red-10': '#FF4040'
      },

      maxWidth: {
        '10xl': '120rem'
      }
    }
  }
}