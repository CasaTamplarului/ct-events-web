<template lang="pug">
.swiper-navigation
  Icon(src="/svg/arrow-left.svg" alt="previous slide arrow icon" @click="swiper.slidePrev()")
  Icon(src="/svg/arrow-right.svg" alt="next slide arrow icon" @click="swiper.slideNext()")
</template>

<script setup lang="ts">
const swiper = useSwiper();
</script>

<style lang="scss" scoped>
.swiper-navigation {
  @apply absolute bottom-0 left-0 z-10 backdrop-blur-lg p-1 flex rounded-tr-xl;

  background-color: rgba(255, 255, 255, 0.3);

  img {
    @apply cursor-pointer p-2 w-12;
  }
}
</style>
