// import type { ThumbnailEvent } from "../types/event";

export default async () => {
  const { data, error } = await useFetch("/api/events/upcoming");
  // return await useApiFetch<ThumbnailEvent>("v1", "events/upcoming", "ro");

  if (error.value)
    throw createError({
      ...error.value,
      statusMessage: "Could not fetch data from /events/upcoming",
    });

  return data.value;
};
