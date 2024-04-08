<template lang="pug">
.home-page
  HomepageHeroHeader(:event="heroEvent")
  HomepageEventList(:title="`#${$t('homepage.upcoming')}`" arrowScroll :events="upcomingEvents")
  HomepageEventList(v-if="pastEvents.length" :title="`#${$t('homepage.past')}`" :events="pastEvents" past)
</template>

<script setup>
const heroEvent = await useEvents("hero");
const upcomingEvents = await useEvents("upcoming");
const pastEvents = await useEvents("past");
</script>

<style lang="scss" scoped>
.home-page {
  p {
    height: 3000px;
  }
}
</style>
