import { useApiFetch } from "~/composables/useApiFetch";
import { Event } from "../../../types/event";

export default defineEventHandler(async (event) => {
  const localeCode = parseCookies(event)?.i18n_redirected || "ro";
  const { eventSlug } = event.context.params;

  return await useApiFetch<Event>("v1", `event/${eventSlug}`, localeCode);
});
