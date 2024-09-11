<script setup>
import { computed } from 'vue'

const props = defineProps({
  color: String,
  bordercolor: String
})

const styleObj = computed(() => {
  return {
    '--color': props.color,
    '--bordercolor': props.bordercolor
  }
})
</script>

<template>
  <div class="footer-container" :style="styleObj">
    <div class="footer-box">
      <p>Oasis Network LLC &copy; 2024</p>
    </div>
  </div>
</template>

<style scoped>
.footer-container {
  height: 6rem;
  width: 100%;
  color: var(--color);
  border-top: 2px dashed var(--bordercolor);
}

.footer-box {
  width: 70%;
  text-align: center;
  margin: 3rem auto auto;
}
</style>
