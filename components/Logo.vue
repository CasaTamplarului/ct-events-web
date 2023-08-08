<script setup>
import { logo } from '~/assets/img-imports/commonIcons'

const route = useRoute()

const props = defineProps({
  scrolled: {
    type: Boolean,
    default: false,
  },
})

const scrollToTop = (e) => {
  if (props.scrolled && route.name === 'index') {
    e.preventDefault()
    
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
}
</script>

<template lang="pug">
NuxtLink.h-full(to='/' @click="scrollToTop" :class="{ scrolled }")
  Icon.h-full(
    :src="logo.mainLogo.path"
    :alt="logo.mainLogo.alt"
  )
  span.font-shallota.ml-3.text-gray-10 CASA TAMPLARULUI
  span.font-shallota.text-red-10 &nbsp;#EVENTS
</template>    

<style lang="scss" scoped>
a {
  @apply flex items-center;

  span {
    @apply font-bold text-base mt-1 sm:mt-2;
  }

  &.scrolled {
    span {
      @apply text-base;
    }
  }

  @screen sm {
    span {
      @apply text-4xl;
    }
  }
}
</style>