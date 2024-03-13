<template lang="pug">
.event-page
  EventHeroHeader
  .split-wrapper
    .details-wrapper
      EventDescription
    .carousel-wrapper.py-6.pr-6
      EventPhotoCarousel
  .location-wrapper
    EventDateTime
</template>

<script setup>
definePageMeta({
  layout: "event",
});
</script>

<style lang="scss">
.event-page {

  h2 {
    @apply text-5xl font-semibold pt-16 mb-4;
  }

  .split-wrapper {
    @apply flex flex-col lg:flex-row justify-between;

    .details-wrapper,
    .location-wrapper {
      @apply w-1/2 px-8 pb-12;

      // height: 3000px;
    }

    .carousel-wrapper {
      @apply lg:sticky lg:-top-6 lg:w-1/2;

      @screen lg {
        height: calc(100vh - 64px + 3rem);
      }

      > .swiper-element {
        img.carousel-image {
          min-height: 320px;

          @screen lg {
            height: calc(100vh - 64px);
          }
        }
      }
    }
  }
}
</style>
