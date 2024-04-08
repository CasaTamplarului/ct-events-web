import { useApiFetch } from "~/composables/useApiFetch";
import { ThumbnailEvent } from "../../../types/event";

export default defineEventHandler(async (event) => {
  const localeCode = parseCookies(event)?.i18n_redirected || "ro";

  return await useApiFetch<ThumbnailEvent>("v1", "events/hero", localeCode);
});
