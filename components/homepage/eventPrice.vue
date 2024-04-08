<template lang="pug">
.price-wrapper(
  :class="{ 'animate-pulse': loading }"
)
  .content-wrapper(v-if="!loading")
    span.from(v-if="from && !freeEvent") {{ $t('event.price.from') }}&nbsp;
    span.line-through.text-xs.mr-1(v-if="discount") 50 lei
    span(:class="{ discount, capitalize: freeEvent }") {{ eventPrice }}
  .content-wrapper(v-else)
    span.h-6.bg-zinc-500.rounded.w-14.block
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
  },

  loading: {
    type: Boolean,
    default: false,
  },

  price: {
    type: [String, Number],
    default: null,
  },
});

const { t } = useI18n();
const freeEvent = ref(props.price === "0.0");

const eventPrice = computed(() => {
  return freeEvent.value
    ? t("event.price.free")
    : `${parseFloat(props.price)} lei`;
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
