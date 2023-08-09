// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Evenimente | Casa Tâmplarului',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, height=device-height, minimum-scale=1.0, user-scalable=0'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Aici găsești toate evenimentele desfășurate de către Casa Tâmplarului'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  ssr: true,

  css: ['assets/scss/main.scss'],

  components: true,

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxt/image'],

  i18n: {
    strategy: 'prefix_except_default',
    locales: ['ro', 'en'],
    defaultLocale: 'ro'
  }
})
