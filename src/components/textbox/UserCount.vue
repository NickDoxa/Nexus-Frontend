<script setup>
import HomeAPI from '@/common/HomeAPI.js'
import { onBeforeMount, ref } from 'vue'

const count = ref(0)

onBeforeMount(async () => {
  try {
    const response = await HomeAPI.getCount()
    count.value = response?.data.userCount ?? 0
    return true
  } catch (error) {
    console.log(error)
  }
  return false
})

</script>

<template>
  <div class="user-count-container">
    <div class="user-count-inner">
      <h1>Current User Count: <span style="font-family: NexusBodyHack, sans-serif">{{count === null ? '' : count}}</span></h1>
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