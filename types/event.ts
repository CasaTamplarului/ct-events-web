import type { Ticket } from "./ticket";

export type ThumbnailEvent = {
  start_date: Date;
  end_date: Date;
  name: String;
  tag_line: String;
  fully_booked: Boolean;
  starts_from: Number;
  slug: String;
  tickets: Ticket[];
};

export type Event = {
  start_date: Date;
  end_date: Date;
  name: String;
  tag_line: String;
  fully_booked: Boolean;
  starts_from: Number;
  tickets: Ticket[];
};
