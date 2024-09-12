<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'
import { useRouter } from 'vue-router'
import { onBeforeMount, reactive, ref } from 'vue'
import { UserDto } from '@/common/dto/user.dto'
import { HttpAPI } from '@/common/API'
import LogoutButton from '@/components/buttons/LogoutButton.vue'

const validated = ref<Boolean>(false)
const router = useRouter()
const user = reactive<UserDto>({
  authId: '',
  username: '',
  email: '',
  picture: ''
})

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
      user.authId = exists_data.authId
      user.username = exists_data.username
      user.email = exists_data.email
      user.picture = exists_data.picture
      validated.value = true
    }
  } catch (error) {
    console.log("Request Error!")
    console.log(error)
  }
})
</script>

<template>
  <!-- VALIDATED CONTENT -->
  <LogoutButton :validated="validated"/>
  <!-- LOADER UNTIL VALIDATED -->
  <div class="centered-content pushed-down transition-out"
       :class="{'hidden' : validated, 'shown' : !validated}">
    <img src="@/assets/images/loading.svg" alt="loading"/>
  </div>
</template>