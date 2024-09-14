<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'
import { useRouter } from 'vue-router'
import { defineAsyncComponent, onBeforeMount, reactive, ref } from 'vue'
import { UserDto } from '@/common/dto/user.dto'
import { HttpAPI } from '@/common/API'
import LogoutButton from '@/components/buttons/LogoutButton.vue'
import ProfileCard from '@/components/cards/ProfileCard.vue'
import { CardDto } from '@/common/dto/card.dto'

const validated = ref<Boolean>(false)
const hideLogout = reactive({
  hide: false
})
const router = useRouter()

const setUserValuesByAuth = (userValues) => {
  user.authId = userValues.sub ?? ''
  user.username = userValues.name ?? ''
  user.email = userValues.email ?? ''
  user.picture = userValues.picture ?? ''
}

const getDefaultCard: CardDto = () => {
  return {
    bio: 'Not Set',
    backgroundColorHex: '#000000',
    textColorHex: '#FFFFFF',
    favoriteGame: 'Not Set',
    platform: 'Not Set',
    games: [{
      game: 'None Set',
      username: 'None Set',
      shown: false
    }]
  }
}

const getDefaultUser: UserDto = () => {
  return {
    authId: user.authId,
    username: user.username,
    email: user.email,
    picture: user.picture,
    card: getDefaultCard()
  }
}

const setUserValues = (userValues: UserDto) => {
  user.authId = userValues.authId ?? ''
  user.username = userValues.username ?? ''
  user.email = userValues.email ?? ''
  user.picture = userValues.picture ?? ''
  user.card = userValues.card ?? undefined
}

async function fullUpdateUser(userValues: UserDto) {
  console.log("RECEIVED IN AccountView.vue:\n" + JSON.stringify(userValues))
  setUserValues(userValues)
  try {
    const update_response = await HttpAPI.updateUser(userValues);
    const update_data = update_response.data
    if (update_data.authId === null || update_data.authId === '') {
      console.log("UPDATED FAILED")
    } else {
      console.log("UPDATED SUCCESSFULLY")
    }
  } catch(error) {
    console.log('Request Error!')
    console.log(error)
  }
}

const user = reactive<UserDto>({
  authId: '',
  username: '',
  email: '',
  picture: '',
  card: getDefaultCard()
})

onBeforeMount(async () => {
  const { isAuthenticated } = useAuth0()
  if (!isAuthenticated.value) {
    await router.push('/')
    return
  }
  setUserValuesByAuth(useAuth0().user.value)
  try {
    const exists_response = await HttpAPI.userExists(user.authId)
    const exists_data:UserDto = exists_response.data
    if (exists_data.authId === null || exists_data.authId === '') {
      const userDto = getDefaultUser(getDefaultCard())
      const create_response = await HttpAPI.createNewUser(userDto)
      const create_data:UserDto = create_response.data
      setUserValues(create_data)
      validated.value = create_data.authId !== null && create_data.authId !== ''
      if (!validated.value) await router.push('/')
    } else {
      setUserValues(exists_data)
      validated.value = true
    }
  } catch (error) {
    console.log('Request Error!')
    console.log(error)
  }
  console.log("FINISHED MOUNTING AccountView.vue")
})
</script>

<template>
  <!-- VALIDATED CONTENT -->
  <div
    class="transition-in animate-fadein centered-content pushed-down"
    :class="{ hidden: !validated, shown: validated }"
  >
    <ProfileCard :user="user" :validated="validated" :hidelogout="hideLogout"
                 @update-profile="(u) => {
                   console.log('RECEIVED IN AccountView.vue@UPDATE-PROFILE:\n' + JSON.stringify(u))
                   fullUpdateUser(u)}"
    />
    <LogoutButton v-if="!hideLogout.hide"/>
  </div>

  <!-- LOADER UNTIL VALIDATED -->
  <div
    class="centered-content pushed-down transition-out"
    :class="{ hidden: validated, shown: !validated }"
  >
    <img src="@/assets/images/loading.svg" alt="loading" />
  </div>
</template>
