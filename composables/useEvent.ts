import type { Event } from "~~/types/event";

export default async (eventSlug: String) =>
  await useFetch<Event>(`/api/event/${eventSlug}`);
