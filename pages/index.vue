<template lang="pug">
.home-page
  HomepageHeroHeader
  HomepageEventList(:title="`#${$t('homepage.upcoming')}`" arrowScroll :events="upcomingEvents")
  HomepageEventList(v-if="pastEvents.length" :title="`#${$t('homepage.past')}`" :events="pastEvents" past)
</template>

<script setup>
const upcomingEvents = await useUpcomingEvents();
const pastEvents = await usePastEvents();
</script>

<style lang="scss" scoped>
.home-page {
  p {
    height: 3000px;
  }
}
</style>
