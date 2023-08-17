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
        few_left: 'puține rămase',
        get_tickets: 'Bilete'
      }
    },
    en: {
      homepage: {
        upcoming: 'upcoming',
        past: 'past'
      },
      common: {
        sold_out: 'sold out',
        few_left: 'few left',
        get_tickets: 'Get Tickets'
      }
    }
  }
}))
