<template lang="pug">
Swiper.swiper-element(
  :modules="[SwiperZoom, SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
  :slides-per-view="1"
  :loop="true"
  effect="creative"
  :autoplay="autoplay"
  :creative-effect="creativeEffect"
  :pagination="pagination"
  :zoom="true"
)
  SwiperSlide(v-for="slide in photos" :key="slide")
    img.carousel-image(:src="slide" alt="path")
  SwiperControls
</template>

<script setup>
const photos = [
  "/images/temp/pic_1.jpg",
  "/images/temp/pic_2.jpg",
  "/images/temp/pic_3.jpg",
  "/images/temp/pic_4.jpg",
  "/images/temp/pic_5.jpg",
  "/images/temp/pic_6.jpg",
  "/images/temp/pic_7.jpg",
];

const autoplay = { delay: 2000, disableOnInteraction: true };
const creativeEffect = {
  prev: {
    shadow: false,
    translate: ["-20%", 0, -1],
  },
  next: {
    translate: ["100%", 0, 0],
  },
};
const pagination = { dynamicBullets: true };
</script>

<style lang="scss">
.swiper-element {
  @apply w-full relative;

  img {
    @apply w-full object-cover;
  }

  .swiper-pagination {
    @apply lg:hidden;
  }
}
</style>
