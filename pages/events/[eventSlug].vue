<template lang="pug">
.event-page
  EventHeroHeader
  .content-wrapper
    .details-wrapper
      EventDescription
      p.font-light Hello Event!
    .carousel-wrapper
      EventPhotoCarousel
</template>

<script setup>
definePageMeta({
  layout: "event",
});
</script>

<style lang="scss">
.event-page {
  .content-wrapper {
    @apply flex flex-col lg:flex-row justify-between;

    .details-wrapper {
      @apply w-1/2 px-8 pb-12;

      p {
        height: 3000px;
      }
    }

    .carousel-wrapper {
      @apply lg:sticky lg:top-0 lg:w-1/2;

      @screen lg {
        height: calc(100vh - 64px);
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
