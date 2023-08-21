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
        get_tickets: 'Bilete',
        get_tickets_alt: 'Obține Bilete'
      },
      event: {
        description: 'Descripție',
        date_and_time: 'Data și ora',
        location: 'Locația'
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
        get_tickets: 'Get Tickets',
        get_tickets_alt: 'Get Tickets'
      },
      event: {
        description: 'Description',
        date_and_time: 'Date and time',
        location: 'Location'
      }
    }
  }
}))
