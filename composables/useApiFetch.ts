import locales from "./../utils/locales.js";

export default async (
  version: string,
  url: string,
  localeCode: string,
  options = {}
) => {
  const config = useRuntimeConfig();
  const locale = locales.find((language) => language.code === localeCode);
  const fullUrl = `${config.public.apiUrl}/api/${version}/${locale.iso}/${url}`;

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

  // return (await $fetch(
  //   `${config.public.apiUrl}/api/${version}/${locale.iso}/${url}`,
  //   options
  // )) as T;

  return await $fetch(fullUrl, options);

  // console.info(response);

  // if (error.value)
  //   throw createError({
  //     ...error.value,
  //     statusMessage: `Could not fetch data from ${fullUrl}`,
  //   });

  // return data.value as T;

  // return response as T;
};
