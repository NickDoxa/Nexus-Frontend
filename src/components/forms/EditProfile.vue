<script setup lang="ts">
import { UserDto } from '@/common/dto/user.dto'
import { ref } from 'vue'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import GridGroup from '@/components/groups/GridGroup.vue'
import { CardDto } from '@/common/dto/card.dto'
import { GameDto } from '@/common/dto/game.dto'

const props = defineProps<{
  user: UserDto
  card: CardDto
}>()

const emit = defineEmits<{
  saveProfile: [user: UserDto]
}>()

const usernameInput = ref<string>(props.user.username)
const platformInput = ref<string>(props.card.platform)
const favGameInput = ref<string>(props.card.favoriteGame)
const bioInput = ref<string>(props.card.bio)
const textColorInput = ref<string>(props.card.textColorHex)
const backgroundColorInput = ref<string>(props.card.backgroundColorHex)
const visible = ref<boolean>(false)
const gameAddInput = ref<string>('')
const usernameAddInput = ref<string>('')

const platforms = [
  "PC",
  "PlayStation",
  "Xbox",
  "Mobile",
  "Nintendo Switch",
  "Not Set"
]

const removeGame = (game: GameDto) => {
  const index = props.card.games.indexOf(game)
  props.card.games.splice(index, 1);
}

const addGame = () => {
  const newGame = {
    game: gameAddInput.value,
    username: usernameAddInput.value,
    shown: true
  }
  props.card.games.push(newGame)
  visible.value = false
}

const save = () => {
  props.user.username = usernameInput.value
  props.card.bio = bioInput.value
  props.card.platform = platformInput.value
  props.card.favoriteGame = favGameInput.value
  props.card.textColorHex = textColorInput.value.charAt(0) === '#' ?
    textColorInput.value : "#" + textColorInput.value
  props.card.backgroundColorHex = backgroundColorInput.value.charAt(0) === '#' ?
    backgroundColorInput.value : "#" + backgroundColorInput.value
  props.user.card = props.card
  console.log("PASSING UP FROM EditProfile.vue:\n" + JSON.stringify(props.user))
  emit('saveProfile', props.user)
}
</script>

<template>
  <div class="centered-content edit-form-box">
    <div class="centered-content edit-form-group">
      <h1 class="padding-down">Edit Profile</h1>
      <InputGroup class="padding-down">
        <InputGroupAddon>
          <i class="pi pi-user"></i>
        </InputGroupAddon>
        <FloatLabel class="padding-right">
          <InputText v-model="usernameInput" inputId="username"/>
          <label for="username">Username</label>
        </FloatLabel>
        <InputGroupAddon>
          <i class="pi pi-desktop"></i>
        </InputGroupAddon>
        <FloatLabel>
          <Select v-model="platformInput" inputId="platform" :options="platforms" class="w-full"/>
          <label for="platform">Preferred Platform</label>
        </FloatLabel>
      </InputGroup>
      <InputGroup class="padding-down">
        <InputGroupAddon>
          <i class="pi pi-heart"></i>
        </InputGroupAddon>
        <FloatLabel>
          <InputText v-model="favGameInput" inputId="favgame"/>
          <label for="favgame">Favorite Game</label>
        </FloatLabel>
      </InputGroup>
      <InputGroup>
        <FloatLabel>
          <Textarea v-model="bioInput" inputId="bio" auto-resize rows="5" cols="80"
                    :invalid="bioInput.length > 200 || bioInput === ''"/>
          <label for="bio">Bio (Maximum 200 Characters)</label>
        </FloatLabel>
      </InputGroup>
      <InputGroup>
        <GridGroup columns="1fr 1fr" width="100%">
          <div>
            <p>Text Color</p><br/>
            <ColorPicker v-model="textColorInput" format="hex"/>
          </div>
          <div>
            <p>Background Color</p><br/>
            <ColorPicker v-model="backgroundColorInput" format="hex"/>
          </div>
        </GridGroup>
      </InputGroup>
      <p style="font-size: 1.5rem">Linked Games and Usernames</p><br/>
      <p>Check the boxes of games you want to be publicly displayed!</p><br/>
      <Button label="Add Game" raised
              style="margin-bottom: 1rem"
              @click="visible = true"
      />
      <Dialog v-model:visible="visible" modal header="Edit Profile" :style="{ width: '25rem' }">
        <span class="text-surface-500 dark:text-surface-400 block mb-8">Add Game To Profile.</span>
        <div class="flex items-center gap-4 mb-2">
          <label for="game" class="font-semibold w-24">Game</label>
          <InputText v-model="gameAddInput" id="game" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex items-center justify-content-evenly gap-4 mb-4">
          <label for="username" class="font-semibold w-24">Username</label>
          <InputText v-model="usernameAddInput" id="username" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex justify-end gap-2">
          <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
          <Button type="button" label="Add" @click="addGame"></Button>
        </div>
      </Dialog>
      <ScrollPanel>
        <div v-if="card.games && card.games.length > 0">
          <div class="game-card" v-for="game in card.games">
            <p><strong>{{game.game}}:</strong> {{game.username}}</p>
            <span class="game-buttons">
              <Checkbox style="float:right;" v-model="game.shown" binary/>
              <a @click="removeGame(game)">
                <i class="pi pi-minus-circle remove-button"></i>
              </a>
            </span>
          </div>
        </div>
        <div v-else>
          <p><i>No games added yet... Press 'Add Game' to add some connections!</i></p>
        </div>
      </ScrollPanel>
    </div>
    <Button label="Save" icon="pi pi-check" icon-pos="right" raised
            @click="save"
    />
  </div>
</template>

<style scoped>
.edit-form-box {
  width: 40rem;
  height: auto;
  padding: 5rem;
  border-radius: 25px;
  background-color: #220135;
}

.edit-form-group {
  width: 90%;
}

.padding-down {
  padding-bottom: 3rem;
}

.padding-right {
  padding-right: 1rem;
}

.game-card {
  width: 80%;
  background-color: #000000;
  color: #f2ebfb;
  border: 0.1rem solid #000000;
  border-radius: 25px;
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
}

.game-buttons {
  width: 4rem;
  display: flex;
  align-items: end;
  justify-content: space-between;
}

.remove-button {
  color: red;
  margin-top: auto;
  margin-bottom: auto;
  cursor: pointer;
}
</style>