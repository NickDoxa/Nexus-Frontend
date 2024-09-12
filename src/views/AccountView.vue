<script setup lang="ts">
import { useAuth0, User } from '@auth0/auth0-vue'
import { useRouter } from 'vue-router'
import { onBeforeMount, reactive, ref } from 'vue'
import { UserDto } from '@/common/dto/user.dto'
import { HttpAPI } from '@/common/API'

const validated = ref<Boolean>(false)
const {logout} = useAuth0()
const router = useRouter()
const user = reactive<UserDto>({
  authId: '',
  username: '',
  email: '',
  picture: ''
})

const handleLogout = () => {
  logout({
    logoutParams: {
      returnTo: window.location.origin
    }
  })
}

onBeforeMount(async () => {
  const {isAuthenticated} = useAuth0()
  if (!isAuthenticated.value) {
    await router.push('/')
    return
  }
  const userValue = useAuth0().user.value
  user.authId = userValue.sub ?? ''
  user.username = userValue.name ?? ''
  user.email = userValue.email ?? ''
  user.picture = userValue.picture ?? ''
  try {
    const exists_response = await HttpAPI.userExists(user.authId)
    const exists_data:UserDto = exists_response.data
    if (exists_data.authId === null || exists_data.authId === '') {
      //NOT FOUND
      const transferDTO = {
        authId: user.authId,
        username: user.username,
        email: user.email,
        picture: user.picture
      }
      const create_response = await HttpAPI.createNewUser(transferDTO)
      const create_data = create_response.data
      validated.value = create_data.authId !== null && create_data.authId !== ''
    } else {
      //FOUND
      user.authId = exists_data.authId
      user.picture = exists_data.picture
      user.username = exists_data.username
      user.email = exists_data.email
      validated.value = true
    }
  } catch (error) {
    console.log("Request Error!")
    console.log(error)
  }
})

</script>

<template>
  <div class="centered-content" v-if="validated">
    <h1><a href="#" @click="handleLogout">account</a></h1>
    <code>{{user.username}}</code><br/>
    <code>{{user.email}}</code><br/>
    <code>{{user.authId}}</code><br/>
    <code>{{user.picture}}</code>
  </div>
  <div class="centered-content"></div>
</template>

<style scoped>

</style>