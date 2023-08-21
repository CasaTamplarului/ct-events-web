<template lang="pug">
.event-page
  EventHeroHeader
  p.font-light Hello Event!
</template>

<script setup>
definePageMeta({
  layout: 'event'
})
</script>

<style lang="scss" scoped>
.event-page {
  p {
    height: 3000px;
  }
}
</style>
