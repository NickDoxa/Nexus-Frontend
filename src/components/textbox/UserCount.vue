<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { HttpAPI } from '@/common/API'
import axios from 'axios'

const count = ref<Number>(0)

onBeforeMount(async () => {
  try {
    const response = await HttpAPI.getCount()
    //hehehe spoofed user count
    count.value = response?.data?.userCount ?? 0
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <div class="user-count-container">
    <div class="user-count-inner">
      <h1>
        Current User Count:
        <span style="font-family: NexusBodyRetro, serif">
          {{ count === null ? '' : count }}</span
        >
      </h1>
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
  border: 0.2rem solid #32004f;
  padding: 8px;
  border-radius: 30px;
  transition: background-color 0.2s ease-in-out;
}

.user-count-inner:hover {
  background-color: #32004f;
}
</style>
