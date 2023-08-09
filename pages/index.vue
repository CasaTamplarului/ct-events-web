<template lang="pug">
.home-page
  HomepageHero
  HomepageEventList(:title="`#${$t('homepage.upcoming')}`")
</template>

<style lang="scss" scoped>
.home-page {
  @apply pt-[52px] sm:pt-[81px];

  p {
    height: 3000px;
  }
}
</style>