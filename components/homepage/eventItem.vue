<template lang="pug">
.event-item
  .event-image(:style="{ backgroundImage: `url(${eventImage})` }")
    HomepageEventPrice(:discount="discount" :from="from")
  .content-wrapper
    .date-wrapper
      .date-item.from
        span.month {{ fromMonth }}
        | &nbsp;{{ fromDay }}
      .date-item.to(v-if="toMonth")
        span &nbsp;-&nbsp;
        span.month {{ toMonth }}
        | &nbsp;{{ toDay }}
    .header-wrapper
      h4 Tabara Impact 2023
      p What would Jesus do? Hai si tu sa vezi!
    .actions-wrapper
      p.note(v-if="fewSpaces") {{ $t('event.few_spaces') }}
      button.primary.xs(
        :disabled="soldOut"
      )
        span.text-red-600(v-if="soldOut") {{ $t('event.sold_out') }}
        span(v-else) {{ $t('common.get_ticket') }}
</template>

<script setup>
const eventImage = "/images/impact2023.jpg";
const { localeProperties } = useI18n();

const soldOut = ref(false);
const discount = ref(false);
const from = ref(false);
const fewSpaces = ref(false);

const fromMonth = ref(
  useDateFormat(new Date("2023-07-17"), "MMM", {
    locales: localeProperties.value.iso,
  })
);
const toMonth = ref(
  useDateFormat(new Date("2023-07-22"), "MMM", {
    locales: localeProperties.value.iso,
  })
);
const fromDay = ref(
  useDateFormat(new Date("2023-07-17"), "DD", {
    locales: localeProperties.value.iso,
  })
);
const toDay = ref(
  useDateFormat(new Date("2023-07-22"), "DD", {
    locales: localeProperties.value.iso,
  })
);
</script>

<style lang="scss" scoped>
.event-item {
  @apply flex flex-col cursor-pointer relative;

  .event-image {
    @apply h-40 w-full rounded-b-none rounded-xl bg-gradient-to-b from-[#528399] to-[#9f8a8a] bg-cover bg-center bg-neutral-500 relative;
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

    .actions-wrapper {
      @apply grid grid-cols-5 items-center mt-2;

      button {
        @apply col-start-4 col-end-6;
      }

      p {
        &.note {
          @apply col-start-1 col-end-4 text-sm text-amber-500 font-semibold;
        }
      }
    }
  }
}
</style>
