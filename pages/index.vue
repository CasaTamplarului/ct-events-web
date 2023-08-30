<template lang="pug">
.home-page
  HomepageHeroHeader
  HomepageEventList(:title="`#${$t('homepage.upcoming')}`" arrowScroll)
  HomepageEventList(:title="`#${$t('homepage.past')}`")
</template>

<style lang="scss" scoped>
.home-page {
  p {
    height: 3000px;
  }
}
</style>
