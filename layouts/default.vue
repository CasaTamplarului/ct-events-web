<template lang="pug">
div
  PageNavbar
  .page-container.mb-auto
    slot
  PageFooter
</template>

<style lang="scss" scoped>
.page-container {
  @apply pt-[52px] sm:pt-[81px];
}
</style>
