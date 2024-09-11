<script setup lang="ts">
import HomeAPI from '@/common/HomeAPI.js'
import { onBeforeMount, ref } from 'vue'
import delay from '@/common/Delay.js'
import {vElementVisibility} from '@vueuse/components'

const timeToUpdateSeconds = 2;
const count = ref<Number>(0)
const updatedCount = ref<Number>(0)
const fullyUpdated = ref<Boolean>(false)
const updateCountToTotal = async () => {
  if (fullyUpdated.value) return;
  fullyUpdated.value = true
  if (count.value >= updatedCount.value) return;
  count.value = 0;
  const totalMillisStep = (timeToUpdateSeconds / updatedCount.value) * 1000
  for (let i = 0; i < updatedCount.value; i++) {
    await delay(totalMillisStep)
    count.value++;
  }
}

onBeforeMount(async () => {
  try {
    const response = await HomeAPI.getCount()
    //hehehe spoofed user count
    updatedCount.value = response?.data?.userCount ?? 0
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <div class="user-count-container">
    <div class="user-count-inner" v-element-visibility="updateCountToTotal">
      <h1>Current User Count: <span style="font-family: NexusBodyHack, sans-serif">
        {{count === null ? '' : count}}</span></h1>
    </div>
  </div>
</template>

<style scoped>
.user-count-container {
  margin: auto;
  text-align: center;
  font-size: 18px;
  justify-content: center;
}

.user-count-inner {
  margin: auto;
  width: 60%;
  border: 0.2rem solid #32004F;
  padding: 8px;
  border-radius: 30px;
  transition: background-color .2s ease-in-out;
}

.user-count-inner:hover {
  background-color: #32004F;
}
</style>