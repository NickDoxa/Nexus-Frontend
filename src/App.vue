<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/groups/NavBar.vue'
import ReturnToTop from '@/components/buttons/ReturnToTop.vue'
import { ref } from 'vue'
import { vElementVisibility } from '@vueuse/components'

const navVisible = ref<Boolean>(true)
function onElementVisibility(state) {
  navVisible.value = state
}
</script>
<template>
  <NavBar v-element-visibility="onElementVisibility" />
  <RouterView />
  <ReturnToTop :visible="navVisible" />
</template>
