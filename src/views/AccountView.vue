<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'
import { useRouter } from 'vue-router'
import { onBeforeMount, ref } from 'vue'

const {logout} = useAuth0()
const router = useRouter()
const userid = ref<String>()
const username = ref<String>()
const email = ref<String>()
const picture_src = ref<String>()

const handleLogout = () => {
  logout({
    logoutParams: {
      returnTo: window.location.origin
    }
  })
}

onBeforeMount(async () => {
  const {isAuthenticated} = useAuth0()
  if (!isAuthenticated.value) await router.push('/')
  else {
    username.value = useAuth0().user.value.name ?? ''
    email.value = useAuth0().user.value.email ?? ''
    userid.value = useAuth0().user.value.sub ?? ''
    picture_src.value = useAuth0().user.value.picture ?? ''
  }
})

</script>

<template>
  <h1><a href="#" @click="handleLogout">account</a></h1>
  <code>{{username}}</code><br/>
  <code>{{email}}</code><br/>
  <code>{{userid}}</code><br/>
  <code>{{picture_src}}</code>
</template>

<style scoped>

</style>