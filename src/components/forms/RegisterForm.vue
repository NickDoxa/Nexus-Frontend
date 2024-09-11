<script setup lang="ts">
import { ref } from 'vue'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'

const username = ref<String>('')
const password = ref<String>('')
const confirmpass = ref<String>('')
</script>

<template>
  <div
    class="flex flex-column w-20rem centered-content"
    style="margin-top: 6rem; margin-bottom: auto"
  >
    <div class="centered-content">
      <h1>Sign Up</h1>
      <br />
      <p>Sign up for a Game Nexus account and unlock your personal profile card!</p>
    </div>
    <div class="flex align-items-center justify-content-center h-4rem bg-primary m-2">
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-user"></i>
        </InputGroupAddon>
        <FloatLabel>
          <InputText v-model="username" inputId="username" />
          <label for="username">Username</label>
        </FloatLabel>
      </InputGroup>
    </div>
    <div class="flex align-items-center justify-content-center h-4rem bg-primary m-2">
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-lock-open"></i>
        </InputGroupAddon>
        <FloatLabel>
          <Password v-model="password" inputId="password" />
          <label for="password">Password</label>
        </FloatLabel>
      </InputGroup>
    </div>
    <div class="flex align-items-center justify-content-center h-4rem bg-primary m-2">
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-lock"></i>
        </InputGroupAddon>
        <FloatLabel>
          <Password v-model="confirmpass" inputId="confirmpassword" :feedback="false" />
          <label for="confirmpassword">Confirm Password</label>
        </FloatLabel>
      </InputGroup>
    </div>
    <div class="flex align-items-center justify-content-center h-4rem bg-primary m-2">
      <Button label="Sign Up" />
    </div>
  </div>
</template>

<style scoped></style>
