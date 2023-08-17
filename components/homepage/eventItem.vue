<template lang="pug">
.event-item
  .ribbon.ribbon-top-right(v-if="false")
    span {{ $t('common.sold_out') }}
  .event-image(:style="{ backgroundImage: `url(${eventImage})` }")
    .price-wrapper
      span 30 lei
  .content-wrapper
    .date-wrapper
      .date-item.from
        span.month iul.
        | &nbsp;17
      .date-item.to
        span &nbsp;-&nbsp;
        span.month iul.
        | &nbsp;22
    .header-wrapper
      h4 Tabara Impact 2023
      p What would Jesus do? Hai si tu sa vezi!
</template>

<script setup>
const eventImage = '/images/impact2023.jpg'
</script>

<style lang="scss" scoped>
.event-item {
  @apply flex flex-col cursor-pointer relative;

  .event-image {
    @apply h-40 w-full rounded-b-none rounded-xl bg-gradient-to-b from-[#528399] to-[#9f8a8a] bg-cover bg-center bg-neutral-500 relative;

    .price-wrapper {
      @apply absolute left-3 top-3 p-2 bg-white rounded-lg;
    }
  }

  .content-wrapper {
    @apply p-3 pb-5 border-b border-x rounded-t-none rounded-xl border-neutral-500;

    .date-wrapper {
      @apply flex mb-2;

      .date-item {
        @apply font-bold;

        span {
          &.month {
            @apply text-sm text-slate-500;
          }
        }
      }
    }

    .header-wrapper {
      h4 {
        @apply font-semibold pb-2;
      }
    }
  }
}
</style>