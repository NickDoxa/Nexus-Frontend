<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

const {logout} = useAuth0()
onBeforeMount(() => {
  const {isAuthenticated} = useAuth0()
  const router = useRouter()
  if (!isAuthenticated) router.push('/')
})

const handleLogout = () => {
  logout({
    logoutParams: {
      returnTo: window.location.origin
    }
  })
}
</script>

<template>
  <h1><a href="#" @click="handleLogout">account</a></h1>
</template>

<style scoped>

</style>