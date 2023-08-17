<template lang="pug">
img(:src="src" :alt="alt" :width="width" :height="height")
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: 'Image',
  },
  width: {
    type: String,
    default: '',
  },
  height: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
});
</script>
