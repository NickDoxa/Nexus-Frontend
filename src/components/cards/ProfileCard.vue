<script setup lang="ts">
import { ref, watch } from 'vue'
import { UserDto } from '@/common/dto/user.dto'
import { CardDto } from '@/common/dto/card.dto'
import EditProfile from '@/components/forms/EditProfile.vue'
import { HttpAPI } from '@/common/API'
import { ImageDto } from '@/common/dto/image.dto'

const editMode = ref<boolean>(false)
const editPfp = ref<boolean>(false)
const pfpSource = ref<string>('')
const usePicture = ref<boolean>(false)
const useEmail = ref<boolean>(false)
const card = ref<CardDto>({
  bio: '',
  backgroundColorHex: '',
  textColorHex: '',
  favoriteGame: '',
  platform: '',
  games: []
})

const emit = defineEmits<{
  updateProfile: [user: UserDto]
}>()

const props = defineProps<{
  validated: boolean,
  user: UserDto,
  hidelogout: undefined
}>()

const toggleEdit = () => {
  editMode.value = !editMode.value
  props.hidelogout.hide = !props.hidelogout.hide
}

const togglePfpEdit = () => {
  editPfp.value = !editPfp.value
}

const saveProfile = (user) => {
  emit('updateProfile', user)
  toggleEdit()
}

const setPfp = async () => {
  const pfp_response = await HttpAPI.getProfilePicture(props.user.authId)
  const pfp_data:ImageDto = pfp_response.data
  pfpSource.value = 'data:image/png;base64,' + pfp_data.image
}

const onUploadPfp = async (event) => {
  await HttpAPI.setProfilePicture(props.user.authId, event.files[0])
  await setPfp()
}

watch(props.user, async () => {
  usePicture.value = props.user.picture !== null && props.user.picture !== ''
  if (usePicture.value && !props.user.useFilePicture) pfpSource.value = props.user.picture
  if (props.user.useFilePicture) await setPfp()
  useEmail.value = props.user.email !== null && props.user.email !== ''
  props.user.username = props.user.username === '' ? 'Name' : props.user.username
  card.value = props.user.card
})

</script>

<template>
  <div v-if="!editMode">
    <Card style="width: 25rem; overflow: hidden; margin-top: 2rem" class="centered-content">
      <template #header>
        <br />
        <a @click="togglePfpEdit">
          <img :src="pfpSource" alt="Profile Picture" class="profile-pfp" v-if="usePicture" />
          <Avatar icon="pi pi-user" class="default-icon" size="xlarge" v-else shape="circle" />
        </a>
        <Dialog v-model:visible="editPfp">
          <div class="centered-content">
            <p><strong>Upload a png profile picture for your account!</strong> <i>(Max size is 1mb)</i></p><br/>
            <FileUpload mode="basic" custom-upload accept="image/png"
                        :maxFileSize="1000000" @select="onUploadPfp" :auto="true"
                        chooseLabel="Browse" />
          </div>
        </Dialog>
      </template>
      <template #title>
        <p style="font-size: 2rem">{{ user.username }}</p>
      </template>
      <template #subtitle v-if="useEmail"> Email: {{ user.email }} </template>
      <template #content>
        <div class="profile-content">
          <p class="profile-header">Bio</p>
          <p>{{ card.bio }}</p>
          <br />
          <p class="profile-header">Favorite Game(s)</p>
          <p>{{ card.favoriteGame }}</p>
          <br />
          <p class="profile-header">Primary Platform</p>
          <p>{{ card.platform }}</p>
          <br />
          <p class="profile-header">Listed Usernames</p>
          <p v-for="game in card.games">{{game.username}}</p>
          <br />
          <p class="profile-header">Listed Games</p>
          <p v-for="game in card.games">{{game.game}}</p>
        </div>
        <Button @click="toggleEdit" style="margin-top:1.2rem;">Edit</Button>
      </template>
    </Card>
  </div>
  <div v-else>
    <EditProfile :user="user" :card="card" @save-profile="(u,n) => saveProfile(u,n)"/>
  </div>
</template>

<style scoped>
.default-icon {
  width: 5rem;
  height: 5rem;
}

.profile-pfp {
  border-radius: 45px;
  width: 5rem;
  height: 5rem;
}

.profile-content {
  text-align: left;
  margin-left: 1rem;
  font-size: 1.2rem;
}

.profile-header {
  color: #e4c1f9;
}
</style>
