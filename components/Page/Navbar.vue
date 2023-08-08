<script setup>
const scrolled = ref(false)

onMounted(() => {
  window.addEventListener("scroll", () => {
    if (document.body.scrollTop >= 30 || document.documentElement.scrollTop >= 30) {
      scrolled.value = true
    } 
    else {
      scrolled.value = false
    }
  });
})
</script>

<template lang="pug">
.navbar-wrapper(:class="{ scrolled }")
  .navbar-content.h-full
    Logo(:scrolled="scrolled")
</template>

<style lang="scss">
.navbar-wrapper {
  @apply h-full w-full max-w-[1920px] left-0 right-0 mx-auto inline-block bg-white z-50 fixed top-0 max-h-[81px] bg-white;

  transition: 0.1s;

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
}
</style>