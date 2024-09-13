<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'

const props = defineProps<{
  reverse: Boolean
}>()

const { isAuthenticated } = useAuth0()
</script>

<template>
  <div v-if="props.reverse ? !isAuthenticated : isAuthenticated">
    <slot />
  </div>
</template>
