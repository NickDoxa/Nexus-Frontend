<script setup lang="ts">
import FadedComponent from '@/components/animations/FadedComponent.vue'
const props = defineProps<{
  fadeonscroll: Boolean
}>()
</script>

<template>
  <div class="img-box-container">
    <FadedComponent :scroll="props.fadeonscroll">
      <slot class="img-box" />
    </FadedComponent>
  </div>
</template>

<style scoped>
.img-box-container {
  display: block;
  margin: auto;
  text-align: center;
  justify-content: center;
}
</style>
