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

    pageTransition: { name: 'page', mode: 'out-in' }
  },

  ssr: true,

  css: ['assets/scss/main.scss'],

  components: true,

  modules: ['@nuxtjs/tailwindcss']
})
