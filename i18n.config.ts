export default defineI18nConfig(() => ({
  legacy: false,
  locale: "ro",
  messages: {
    ro: {
      homepage: {
        upcoming: "urmează",
        past: "trecute",
      },
      common: {
        sold_out: "vândut",
        few_left: "puține rămase",
        get_tickets: "Bilete",
        get_tickets_alt: "Obține Bilete",
        get_ticket: "Bilete"
      },
      event: {
        description: "Descriere",
        date_and_time: "Data și ora",
        location: "Locația",
        sold_out: "Epuizat",
        few_spaces: "Au rămas puține",
        price: {
          from: "de la"
        }
      },
    },
    en: {
      homepage: {
        upcoming: "upcoming",
        past: "past",
      },
      common: {
        sold_out: "sold out",
        few_left: "few left",
        get_tickets: "Get Tickets",
        get_tickets_alt: "Get Tickets",
        get_ticket: "Tickets"
      },
      event: {
        description: "Description",
        date_and_time: "Date and time",
        location: "Location",
        sold_out: "Sold out",
        few_spaces: "Few left",
        price: {
          from: "from"
        }
      },
    },
  },
}));
