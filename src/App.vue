<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/groups/NavBar.vue'
import ReturnToTop from '@/components/buttons/ReturnToTop.vue'
import { ref } from 'vue'
import { vElementVisibility } from '@vueuse/components'
import FooterBar from '@/components/groups/FooterBar.vue'

const navVisible = ref<Boolean>(true)
function onElementVisibility(state) {
  navVisible.value = state
}
</script>
<template>
  <NavBar v-element-visibility="onElementVisibility" />
  <RouterView />
  <ReturnToTop :visible="navVisible" />
  <FooterBar :bordercolor="'#3A015C'" :color="'#FFFFFF'" />
</template>
