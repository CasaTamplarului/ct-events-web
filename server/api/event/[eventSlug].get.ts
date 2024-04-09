import useApiFetch from "~/composables/useApiFetch";

export default defineEventHandler(async (event) => {
  const localeCode = parseCookies(event)?.i18n_redirected || "ro";
  const { eventSlug }: { eventSlug?: string } = event.context.params ?? {};

  if (!eventSlug)
    throw createError({
      statusCode: 404,
      statusMessage: "Could not find event slug",
    });

  return await useApiFetch("v1", `event/${eventSlug}`, localeCode);
});
