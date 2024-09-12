<script setup lang="ts">
const props = defineProps<{
  scroll?: Boolean
}>()
</script>

<template>
  <div class="animate-fadein" v-if="!props.scroll">
    <slot />
  </div>
  <div v-animateonscroll="{ enterClass: 'animate-fadein', leaveClass: 'animate-fadeout' }" v-else>
    <slot />
  </div>
</template>
