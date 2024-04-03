import locales from "./../utils/locales.js";

export const useApiFetch = async <T>(
  version: string,
  url: string,
  localeCode: string,
  options = {}
): Promise<T> => {
  const config = useRuntimeConfig();
  const locale = locales.find((language) => language.code === localeCode);

  // const response = await $fetch<any>(
  //   `${config.public.apiUrl}/api/${version}/${locale.iso}/${url}`,
  //   options
  // );

  // if (error.value)
  //   throw createError({
  //     ...error.value,
  //     statusMessage: "Could not fetch data from url",
  //   });

  // return response as T;

  return (await $fetch(
    `${config.public.apiUrl}/api/${version}/${locale.iso}/${url}`,
    options
  )) as T;
};
