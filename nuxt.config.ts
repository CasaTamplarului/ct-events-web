import locales from "./utils/locales.js";

export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
    },
  },

  app: {
    head: {
      title: "Evenimente | Casa Tâmplarului",
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, height=device-height, minimum-scale=1.0, user-scalable=0",
        },
        {
          hid: "description",
          name: "description",
          content:
            "Aici găsești toate evenimentele desfășurate de către Casa Tâmplarului",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  css: ["assets/scss/main.scss"],

  components: true,

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "nuxt-swiper",
    "nuxt-mapbox",
  ],

  swiper: {
    prefix: "Swiper",
    styleLang: "scss",
    modules: [
      "autoplay",
      "navigation",
      "pagination",
      "effect-creative",
      "zoom",
    ],
  },

  i18n: {
    strategy: "prefix_except_default",
    langDir: "./locales/",
    locales,
    defaultLocale: "ro",
    vueI18n: "./i18n.config.ts",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      alwaysRedirect: false,
      fallbackLocale: "ro",
    },
  },

  mapbox: {
    accessToken: process.env.MAPBOX_ACCESS_TOKEN,
  },
});
