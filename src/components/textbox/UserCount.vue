<script setup>
import axios from 'axios'
import { ref } from 'vue'

const count = ref(0)
const getCount = async () => {
  await axios.get("http://localhost:8080/api/home/user-count")
    .then((response) => {
      const data = response.data
      count.value = data.userCount;
    })
    .catch((exception) => {
      return exception;
    })
  return null;
}
getCount()
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
  border: 3px solid #32004F;
  padding: 8px;
  border-radius: 30px;
}
</style>