<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<template lang="pug">
.event-list
  h2 {{ props.title }}
  HomepageEventItem
</template>

<style lang="scss" scoped>
.event-list {
  @apply px-4 xl:px-16 pb-2 xl:pb-8 max-w-5xl mx-auto;

  h2 {
    @apply text-3xl font-bold border-b-2 pb-2 mb-8;
  }
}
</style>
