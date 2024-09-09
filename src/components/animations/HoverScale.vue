<script setup>
import { computed } from 'vue'

const props = defineProps({
  scalesize: Number
})

const styleObj = computed(() => {
  return {
    '--scale-size' : props.scalesize
  }
})
</script>

<template>
  <div class="hover-scale" :style="styleObj">
    <slot/>
  </div>
</template>

<style scoped>
.hover-scale {
  transition: all .2s ease-in-out;
  height: 100%;
}

.hover-scale:hover {
  transform: scale(var(--scale-size));
}
</style>