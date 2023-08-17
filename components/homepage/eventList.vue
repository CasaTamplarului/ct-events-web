<template lang="pug">
.event-list
  h2 {{ props.title }}
    img.ml-2.animate-bounce(v-if="arrowScroll" :class="{ hidden: commonStore.scrolledGetter }" :src="arrowSVG" alt="double arrow down")
  .container-wrapper
    HomepageEventItem
    HomepageEventItem
    HomepageEventItem
    HomepageEventItem
</template>

<script setup>
import { useCommonStore } from '~/stores/common'

const commonStore = useCommonStore()

const arrowSVG = '/svg/double-arrow-right-icon.svg'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },

  arrowScroll: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.event-list {
  @apply px-4 xl:px-16 pb-2 xl:pb-8 max-w-5xl mx-auto;

  h2 {
    @apply flex items-center justify-between text-3xl font-bold border-b-2 pb-2 mb-8;

    img {
      width: 26px;
    }
  }

  .container-wrapper {
    @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4;
  }
}
</style>
