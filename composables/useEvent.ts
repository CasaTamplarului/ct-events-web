import type { Event } from "~~/types/event";

export default async (eventSlug: String) => {
  const { data, error } = await useFetch<Event>(`/api/event/${eventSlug}`);

  if (error.value)
    throw createError({
      ...error.value,
      statusMessage: `Could not fetch data from /api/event/${eventSlug}`,
    });

  return data.value as Event;
};
