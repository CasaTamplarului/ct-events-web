<template lang="pug">
div
  PageNavbar(:hideNavOnScrollDown="true")
  PageBottomNavbar
  .event-page-container.mb-auto
    slot
  PageFooter
</template>

<style lang="scss" scoped>
.event-page-container {
  @apply max-w-10xl mx-auto;
}
</style>
