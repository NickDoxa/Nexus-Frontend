<script setup lang="ts">
import { UserDto } from '@/common/dto/user.dto'
import HoverScale from '@/components/animations/HoverScale.vue'
import { GameDto } from '@/common/dto/game.dto'
import { HttpAPI } from '@/common/API'
import { ImageDto } from '@/common/dto/image.dto'
import { onBeforeMount, ref } from 'vue'

const props = defineProps<{
  user: UserDto
}>()

const pictureSource = ref<string>('')

const getGamesLine = () => {
  const games: GameDto[] = props.user.card.games
  let output = ''
  if (games.length < 1) return 'None Set'
  const loopSize = games.length > 3 ? 3 : games.length
  for (let i = 0; i < loopSize; i++) {
    output += games[i].game + ', '
  }
  output = output.substring(0, output.length - 2)
  if (games.length > loopSize) output += 'and more...'
  return output
}

const getPfp = async () => {
  const pfp_response = await HttpAPI.getProfilePicture(props.user.authId)
  const pfp_data:ImageDto = pfp_response.data
  return 'data:image/png;base64,' + pfp_data.image
}

onBeforeMount(async () => {
  if (!props.user.useFilePicture) {
    pictureSource.value = props.user.picture
    return
  }
  pictureSource.value = await getPfp()
})

</script>

<template>
  <div class="card-container">
    <div class="outer-card">
      <HoverScale :scalesize="1.02">
        <div class="inner-card">
          <div class="card-top">
            <img alt="profile picture" :src="pictureSource" class="card-pfp-icon"/>
            <h1>{{props.user.username}}</h1>
          </div>
          <div class="card-bottom">
            <p>
              <b>Connected Accounts:</b> {{getGamesLine()}}
            </p>
          </div>
        </div>
      </HoverScale>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-family: NexusBodyMonda, sans-serif;
  margin: auto;
  width: 100%;
  letter-spacing: normal;
}

p {
  padding: 1.2rem;
}

.card-container {
  display: grid;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.outer-card {
  width: 70%;
  height: 10rem;
  min-width: 340px;
  max-width: 380px;
  text-align: center;
  margin: auto;
}

.inner-card {
  text-align: left;
  overflow: hidden;
  height: 100%;
  width: 100%;
  border: 0.12rem solid #9f21e3;
  border-radius: 25px;
  background: rgb(36, 31, 41);
  background: linear-gradient(90deg, rgba(36, 31, 41, 1) 0%, rgba(0, 0, 0, 1) 100%);
}

.card-top {
  display: flex;
  height: 50%;
  float: left;
  justify-content: flex-start;
  flex-shrink: 2;
  width: 100%;
  top: 0;
}

.card-bottom {
  display: inline-block;
  bottom: 0;
}

.card-pfp-icon {
  margin: 1rem;
  height: 2.6rem;
  width: 2.6rem;
  padding: 0;
  border: 0.1rem solid #000000;
  background-color: #9f21e3;
  border-radius: 45px;
  float: left;
}

@media (max-width: 992px) {
  .card-container {
    top: 10rem;
    display: inline-block;
    justify-content: center;
  }
}
</style>