<script setup lang="ts">
import ActionButton from '@/components/buttons/ActionButton.vue'

const props = defineProps<{
  visible: Boolean
}>()
</script>

<template>
  <div class="rtt-btn-container" v-if="!props.visible">
    <ActionButton
      :text="'Return To Top'"
      :backgroundcolor="'#FBFAFF'"
      :textcolor="'#5B058A'"
      :hovercolor="'#11001C'"
      :linkto="'#nav'"
      :textdecoration="false"
      :isrouterlink="false"
    />
  </div>
</template>

<style scoped>
.rtt-btn-container {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  float: right;
}
</style>
