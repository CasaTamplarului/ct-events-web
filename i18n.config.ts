export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'ro',
  messages: {
    ro: {
      homepage: {
        upcoming: 'urmează',
        past: 'trecute'
      },
      common: {
        sold_out: 'vândut',
        few_left: 'puține rămase'
      }
    },
    en: {
      homepage: {
        upcoming: 'upcoming',
        past: 'past'
      },
      common: {
        sold_out: 'sold out',
        few_left: 'few left'
      }
    }
  }
}))
