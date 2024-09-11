<script setup>
import { computed } from 'vue'

const props = defineProps({
  columns: String,
  width: String
})

const styleObj = computed(() => {
  return {
    '--columns': props.columns,
    '--grid-width': props.width
  }
})
</script>

<template>
  <div class="grid-two-column centered-content" :style="styleObj">
    <slot />
  </div>
</template>

<style scoped>
.grid-two-column {
  grid-template-columns: var(--columns);
  display: grid;
  align-items: center;
  width: var(--grid-width);
  margin-top: 5rem;
  margin-bottom: 5rem;
}

@media (max-width: 992px) {
  .grid-two-column {
    grid-template-columns: 1fr;
    grid-row-gap: 40px;
  }
}
</style>
