import useApiFetch from "~/composables/useApiFetch";

export default defineEventHandler(async (event) => {
  const localeCode = parseCookies(event)?.i18n_redirected || "ro";

  return await useApiFetch("v1", "events/past", localeCode);
});
