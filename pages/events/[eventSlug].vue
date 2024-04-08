<template lang="pug">
.event-page
  EventHeroHeader
  .split-wrapper
    .details-wrapper
      EventDescription
    .carousel-wrapper
      EventPhotoCarousel
  .location-wrapper
    EventDateLocation
  div {{ event }}
</template>

<script setup>
definePageMeta({
  layout: "event",
});

const route = useRoute();
const { eventSlug } = route.params;
const event = await useEvent(eventSlug);
</script>

<style lang="scss">
.event-page {
  h2 {
    @apply text-5xl font-semibold pt-12 lg:pt-16 mb-4;
  }

  .details-wrapper {
    @apply lg:w-1/2;
  }

  .details-wrapper,
  .location-wrapper {
    @apply px-4 lg:px-8 pb-8 lg:pb-12;

    // height: 3000px;
  }

  .split-wrapper {
    @apply flex flex-col lg:flex-row justify-between;

    .carousel-wrapper {
      @apply lg:sticky lg:-top-6 lg:w-1/2 py-6 pr-6 pl-6 lg:pl-0;

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

  @media (max-width: 390px) {
    h2 {
      @apply text-4xl;
    }
  }
}
</style>
