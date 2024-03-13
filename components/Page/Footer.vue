<template lang="pug">
.footer-wrapper
  .logo-container
    p Casa
      br
      | Tâmplarului
  .socials
    NuxtLink(to="https://instagram.com/casatamplaruluicluj" target="_blank")
      Icon(
        :src="socials.instagram.path"
        :alt="socials.instagram.alt"
      )
    NuxtLink(to="https://www.youtube.com/channel/UC9tCd-z2ViSYpDHQlsQBaUA" target="_blank")
      Icon(
        :src="socials.youtube.path"
        :alt="socials.youtube.alt"
      )
    NuxtLink(to="http://www.facebook.com/casatamplarului" target="_blank")
      Icon(
        :src="socials.facebook.path"
        :alt="socials.facebook.alt"
      )
</template>

<script setup>
import { socials } from "~/assets/img-imports/commonIcons";
</script>

<style lang="scss">
.footer-wrapper {
  @apply bg-black p-11;

  .logo-container {
    p {
      @apply font-playfair text-white text-center text-3xl;
    }
  }

  .socials {
    @apply flex justify-center mt-11;

    a {
      @apply mx-1;
    }
  }
}
</style>
