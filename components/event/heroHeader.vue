<template lang="pug">
.event-hero-header
  img.object-cover.w-full.h-full(src="/images/test_hero.jpg")
  .content-wrapper
    h1 Tabăra Impact 2024
    .date-wrapper
      Icon(
        :src="svgs.calendarRegularWhite.path"
        :alt="svgs.calendarRegularWhite.alt"
      )
      h3 Saturday, December 28, 2019.
    .location-wrapper
      Icon(
        :src="svgs.locationDotSolidWhite.path"
        :alt="svgs.locationDotSolidWhite.alt"
      )
      h3 Muri Okunola Park, Victoria Island, Lagos, Nigeria.
    .action-wrapper.mt-6.drop-shadow.px-4
      button.primary.white-hover.btn-white {{ $t('common.get_tickets_alt') }}
</template>

<script setup>
import { svgs } from "~/assets/img-imports/commonIcons";
</script>

<style lang="scss" scoped>
.event-hero-header {
  @apply w-screen h-screen relative max-w-full;

  .content-wrapper {
    @apply flex flex-col items-center justify-center absolute left-0 top-0 w-full h-full;

    background: radial-gradient(circle, rgba(0, 0, 0, 0.4), transparent);

    h1 {
      @apply text-white text-3xl sm:text-5xl font-semibold mb-8 drop-shadow-lg px-4 text-center;
    }

    .date-wrapper,
    .location-wrapper {
      @apply flex items-center mb-4 px-4 text-center;

      img {
        @apply mr-2 sm:mr-4 drop-shadow-lg w-3 sm:w-5;
      }

      h3 {
        @apply text-white text-base sm:text-lg drop-shadow-lg;
      }
    }
  }
}
</style>
