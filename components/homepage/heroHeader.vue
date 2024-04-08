<template lang="pug">
.homepage-hero
  //- canvas#reflection-canvas
  .card.flex.items-center(@mouseenter="handleVideoHover(true)" @mouseleave="handleVideoHover(false)" ref="videoWrapper")
    StaticTV(v-if="!mountVideo")
    video#video-background(v-else loop muted ref="video")
      source(src="/webm/hero_test.webm" type="video/webm")
      | Your browser does not support the video tag.

    .actions-wrapper(:class="{ 'show-actions': showActions }")
      .content-wrapper
        .text-wrapper
          h1 {{ props.event.name }}
            span.divider &nbsp;|&nbsp;
            span
              span.text-blue-20 {{ fromDate }}
              span.text-blue-20(v-if="toDate") &nbsp;- {{ toDate }}
          p {{ props.event.tag_line }}
        .cta-wrapper
          NuxtLink.primary.white-hover(:to="eventPath") {{ $t('common.get_tickets') }}
</template>

<script setup lang="ts">
import type { ThumbnailEvent } from "../../types/event";

const props = defineProps({
  event: {
    type: Object as PropType<ThumbnailEvent>,
    default: () => ({} as ThumbnailEvent),
  },
});

const mountVideo = ref(false);
const showActions = ref(false);
const videoWrapper = ref(null);
const video = ref(null);

const documentVisibility = useDocumentVisibility();
const isVideoVisible = useElementVisibility(videoWrapper);
const { localeProperties } = useI18n();

const fromDate = ref(
  useDateFormat(new Date(props.event.start_date), "MMM DD", {
    locales: localeProperties.value.iso,
  })
);
const toDate = ref(
  useDateFormat(new Date(props.event.end_date), "MMM DD", {
    locales: localeProperties.value.iso,
  })
);

const eventPath = ref(`/events/${props.event.slug}`);

const handleVideoHover = (value) => {
  showActions.value = value;
};

const handleVisibilityChange = () => {
  if (!video.value) return;

  if (documentVisibility.value === "visible" && isVideoVisible.value) {
    video.value.play();
  } else video.value.pause();
};

watch(documentVisibility, () => {
  handleVisibilityChange();
});

watch(isVideoVisible, () => {
  handleVisibilityChange();
});

onMounted(() => {
  mountVideo.value = true;
});
</script>

<style lang="scss" scoped>
.homepage-hero {
  @apply px-4 xl:px-16 pb-8 sm:pb-8 pt-2 sm:pt-8 mx-auto max-w-10xl relative overflow-hidden;

  .card {
    @apply flex-col lg:flex-row bg-black rounded-3xl min-h-full overflow-hidden relative;

    @screen xl {
      height: calc(100vh - 81px - 96px);
    }

    .actions-wrapper {
      @apply lg:absolute w-full h-full rounded-b-3xl top-0 lg:top-full duration-150 flex flex-col justify-end;

      .content-wrapper {
        @apply flex justify-between md:items-center flex-col md:flex-row bg-black lg:bg-transparent lg:backdrop-blur-md p-4;

        h1 {
          @apply text-white text-2xl font-bold;

          > span {
            @apply block sm:inline;

            &.divider {
              @apply hidden sm:inline;
            }
          }
        }

        p {
          @apply text-white text-lg font-bold;
        }

        .cta-wrapper {
          @apply mt-4 md:mt-0;

          a {
            @apply inline-block text-center w-full md:w-auto;
          }
        }
      }

      &:not(.show-actions) {
        @apply lg:opacity-0;
      }

      &.show-actions {
        @apply top-0 opacity-100;
      }
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: -20%;
    left: -20%;
    width: 140%;
    height: 140%;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.2;
    animation: lightReflection 5s linear infinite alternate;
  }

  #reflection-canvas {
    @apply blur-xl;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;
  }
}

@keyframes lightReflection {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}
</style>
