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
      helvetica: ['Helvetica', 'sans-serif']
    },

    extend: {
      colors: {
        'blue-10': '#002D73',
        'gray-10': '#2C2D2E'
      }
    }
  }
}