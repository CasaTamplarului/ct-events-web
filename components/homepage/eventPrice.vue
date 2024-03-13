<template lang="pug">
.price-wrapper
  span.from(v-if="from") {{ $t('event.price.from') }}&nbsp;
  span.line-through.text-xs.mr-1(v-if="discount") 50 lei
  span(:class="{ discount }") 30 lei
</template>

<script setup>
const props = defineProps({
  from: {
    type: Boolean,
    default: false,
  },

  discount: {
    type: Boolean,
    default: false,
  }
});
</script>

<style lang="scss" scoped>
.price-wrapper {
  @apply absolute left-3 top-3 p-2 bg-white rounded-lg;

  span {
    &.discount {
      @apply text-red-600;
    }
  }
}
</style>
