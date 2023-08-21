<template lang="pug">
.navbar-wrapper(:class="{ scrolled: commonStore.scrolledGetter, 'hide-nav': commonStore.isScrollingDown && props.hideNavOnScrollDown }")
  .navbar-content.h-full
    Logo(:scrolled="commonStore.scrolledGetter")
    LanguageSwitch
</template>

<script setup>
import { useCommonStore } from '~/stores/common'

const route = useRoute()

const commonStore = useCommonStore()

const props = defineProps({
  hideNavOnScrollDown: {
    type: Boolean,
    default: false,
  },
})

onMounted(() => {
  window.addEventListener("scroll", () => {
    if (document.body.scrollTop >= 30 || document.documentElement.scrollTop >= 30) commonStore.togglePageScrolled(true)
    else commonStore.togglePageScrolled(false)
  })

  let prevScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener("scroll", () => {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop

    if (document.body.scrollTop >= 30 || document.documentElement.scrollTop >= 30) commonStore.togglePageScrolled(true)
    else commonStore.togglePageScrolled(false)

    if (currentScrollPosition > prevScrollPosition) commonStore.scrollingDown(true)
    else  commonStore.scrollingDown(false)

    prevScrollPosition = currentScrollPosition;
  })
})
</script>

<style lang="scss">
.navbar-wrapper {
  @apply h-full w-full left-0 right-0 mx-auto inline-block z-50 fixed max-h-[52px] bg-white;

  transition: 0.1s;

  transition: top 0.5s;

  &:not(.hide-nav) {
    @apply top-0;
  }

  &.hide-nav {
    @apply -top-full;
  }

  &.scrolled {
    @apply shadow-md max-h-[52px];

    .navbar-content {
      @apply border-0;
    }
  }

  .navbar-content {
    @apply flex items-center w-full justify-between px-4 py-3 relative z-50;

    @screen xl {
      @apply px-20;
    }
  }

  @screen sm {
    @apply max-h-[81px];
  }
}
</style>