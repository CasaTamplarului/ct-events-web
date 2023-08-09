<script setup>
const eventImage = '/images/impact2023.jpg'
</script>

<template lang="pug">
.event-item
  .event-image(:style="{ backgroundImage: `url(${eventImage})` }")
  .content-wrapper
</template>

<style lang="scss" scoped>
.event-item {
  @apply flex h-52 sm:h-40 relative;

  .event-image {
    @apply absolute sm:relative h-full w-full sm:max-w-[208px] sm:rounded-r-none rounded-5xl bg-gradient-to-b from-[#528399] to-[#9f8a8a] bg-cover bg-center bg-neutral-500;
  }

  .content-wrapper {
    @apply border-y border-x sm:border-r sm:rounded-l-none rounded-5xl border-neutral-500 shadow-md sm:shadow-none;

    width: 100%;

    @screen sm {
     width: calc(100% - 208px);
    }
  }
}
</style>