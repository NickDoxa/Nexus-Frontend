<script setup>
import { computed } from 'vue'
import FadedComponent from '@/components/animations/FadedComponent.vue'
const props = defineProps({
  alt: String,
  src: String,
  height: String,
  width: String
})

const styleObj = computed(() => {
  return {
    '--img-height' : props.height,
    '--img-width' : props.width
  }
})

</script>

<template>
 <div class="img-box-container">
   <FadedComponent>
     <img :alt="props.alt" :src="'/src/assets/images/' + props.src" class="img-box" :style="styleObj">
   </FadedComponent>
 </div>
</template>

<style scoped>
.img-box {
  height: var(--img-height);
  width: var(--img-width);
}

.img-box-container {
  display: block;
  margin:auto;
  text-align: center;
  justify-content: center;
}
</style>