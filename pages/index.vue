<template lang="pug">
.home-page
  HomepageHeroHeader
  HomepageEventList(:title="`#${$t('homepage.upcoming')}`" arrowScroll)
  HomepageEventList(:title="`#${$t('homepage.past')}`")
</template>

<style lang="scss" scoped>
.home-page {
  @apply pt-[52px] sm:pt-[81px];

  p {
    height: 3000px;
  }
}
</style>