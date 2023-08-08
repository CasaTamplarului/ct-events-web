<script setup>
const mountVideo = ref(false)
const videoReady = ref(false)

onMounted(() => {
  mountVideo.value = true
  nextTick(() => {
    const video = document.querySelector("video")

    video.oncanplay = () => {
      videoReady.value = true
    }
  })
})
</script>

<template lang="pug">
.homepage-hero
  .card.flex.items-center
    StaticTV(v-if="!videoReady")
    video#video-background(v-if="mountVideo" ref="videoElement" autoplay loop muted)
      source(src="/webm/hero_test.webm" type="video/webm")
      | Your browser does not support the video tag.
</template>

<style lang="scss" scoped>
.homepage-hero {
  @apply px-4 xl:px-16 pb-8 sm:pb-16 pt-2 sm:pt-8 mx-auto max-w-10xl;

  .card {
    @apply bg-neutral-500 rounded-3xl min-h-full relative overflow-hidden;

    @screen xl {
      height: calc(100vh - 81px - 96px);
    }
  }
}
</style>