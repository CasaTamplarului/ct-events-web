import type { ThumbnailEvent } from "~~/types/event";

export default async (slug) => {
  const { data, error } = await useFetch<ThumbnailEvent>(`/api/events/${slug}`);
  // return await useApiFetch<ThumbnailEvent>("v1", "events/upcoming", "ro");

  if (error.value)
    throw createError({
      ...error.value,
      statusMessage: `Could not fetch data from /events/${slug}`,
    });

  console.info(`${slug}:`, data.value);

  return data.value as ThumbnailEvent;
};
