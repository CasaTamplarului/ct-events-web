<template lang="pug">
.event-item
  .event-image(:style="{ backgroundImage: `url(${eventLoaded ? eventImage : ''})` }" :class="{ 'animate-pulse': !eventLoaded }")
    HomepageEventPrice(:discount="discount" :from="from" :loading="!eventLoaded")
  .content-wrapper
    .date-wrapper
      .date-item.from(v-if="eventLoaded")
        span.month {{ fromMonth }}
        | &nbsp;{{ fromDay }}
      .date-item.from.w-12.animate-pulse(v-else)
        span.month.h-4.bg-zinc-500.rounded.w-full.block
      .date-item.to.w-16.animate-pulse.flex.items-center(v-if="!eventLoaded")
        span.block.mx-1 -
        span.month.h-4.bg-zinc-500.rounded.w-full.block
      .date-item.to(v-else-if="toMonth")
        span &nbsp;-&nbsp;
        span.month {{ toMonth }}
        | &nbsp;{{ toDay }}
    .header-wrapper(v-if="eventLoaded")
      h4 {{ props.event.name }}
      p {{ props.event.tag_line }}
    .header-wrapper.animate-pulse(v-else)
      h4.h-6.bg-zinc-500.rounded.mb-2(class="w-9/12")
      p.h-4.bg-zinc-500.rounded.mb-2
      p.h-4.bg-zinc-500.rounded
    .actions-wrapper
      p.note(v-if="fewSpaces") {{ $t('event.few_spaces') }}
      button.primary.xs(
        :disabled="props.event.fully_booked || !eventLoaded"
        :class="{ 'animate-pulse': !eventLoaded, 'btn-blue': past }"
      )
        span(v-if="!eventLoaded") {{ $t('common.loading') }}
        span(v-else-if="past") {{ $t('event.details') }}
        span.text-red-600(v-else-if="props.event.fully_booked") {{ $t('event.sold_out') }}
        span(v-else) {{ $t('common.get_ticket') }}
</template>

<script setup lang="ts">
import type { ThumbnailEvent } from "../../types/event";

const eventImage = "/images/impact2023.jpg";
const { localeProperties } = useI18n();

const props = defineProps({
  event: {
    type: Object as PropType<ThumbnailEvent>,
    default: () => ({} as ThumbnailEvent),
  },

  past: {
    type: Boolean,
    default: false,
  },
});

const discount = ref(false);
const from = ref(false);
const fewSpaces = ref(false);

const eventLoaded = !!props.event.name;

const fromMonth = ref(
  useDateFormat(new Date(props.event.start_date), "MMM", {
    locales: localeProperties.value.iso,
  })
);
const toMonth = ref(
  useDateFormat(new Date(props.event.end_date), "MMM", {
    locales: localeProperties.value.iso,
  })
);
const fromDay = ref(
  useDateFormat(new Date(props.event.start_date), "DD", {
    locales: localeProperties.value.iso,
  })
);
const toDay = ref(
  useDateFormat(new Date(props.event.end_date), "DD", {
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
      @apply flex items-center mb-2;

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

        &.animate-pulse {
          @apply col-start-3;
        }
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
