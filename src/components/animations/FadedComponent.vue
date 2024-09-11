<script setup lang="ts">
const props = defineProps<{
  scroll: Boolean
}>()
</script>

<template>
  <div class="fade-in" v-if="!props.scroll">
    <slot/>
  </div>
  <div v-animateonscroll="{enterClass: 'animate-fadein', leaveClass: 'animate-fadeout'}"
       class="animate-duration-1000 animate-ease-in-out"
       v-else>
    <slot/>
  </div>
</template>

<style scoped>
@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.animate-fadein {
  animation: fadein 0.15s linear;
}

.animate-fadeout {
  animation: fadeout 0.15s linear;
}
</style>