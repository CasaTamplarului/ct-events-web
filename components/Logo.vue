<template lang="pug">
NuxtLink.h-full(:to="localePath('/')" @click="scrollToTop" :class="{ scrolled }")
  Icon.h-full(
    :src="logo.mainLogo.path"
    :alt="logo.mainLogo.alt"
  )
  span.ml-3.text-gray-10 CASA TÂMPLARULUI
  span.text-red-10 &nbsp;#EVENTS
</template>

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
  if (props.scrolled && route.name.includes('index')) {
    e.preventDefault()
    
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
}
</script>   

<style lang="scss" scoped>
a {
  @apply flex items-center;

  span {
    @apply font-playfair font-semibold text-base mb-1;

    transition: 0.1s;
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