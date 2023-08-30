<template lang="pug">
.description-wrapper
  h2#description {{ $t('event.description') }}
</template>

<style lang="scss" scoped>
.description-wrapper {
  h2 {
    @apply text-5xl font-semibold pt-16;
  }
}
</style>
