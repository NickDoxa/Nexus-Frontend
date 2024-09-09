<script setup>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons/faGamepad'
import RotatingHover from '@/components/animations/RotatingHover.vue'

const props = defineProps({
  fadein: Boolean,
  icon: Object
})

</script>

<template>
<div class="card-container">
  <div class="outer-card">
    <RotatingHover>
      <div class="inner-card" :class="{'fade-in' : props.fadein}">
        <div class="card-top">
          <FontAwesomeIcon :icon="faGamepad" class="card-pfp-icon"/>
          <h1>Gamer_Tag123</h1>
        </div>
        <div class="card-bottom">
          <p><b>Connected Accounts:</b>
            Valorant, Minecraft, Rocket League, Call of Duty, Steam, Discord</p>
        </div>
      </div>
    </RotatingHover>
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
  padding: 20px;
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
  height: 200px;
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
  border: 1px solid #9F21E3;
  border-radius: 25px;
  background: rgb(36,31,41);
  background: linear-gradient(90deg, rgba(36,31,41,1) 0%, rgba(0,0,0,1) 100%);
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
  height: 42px;
  width:  42px;
  padding: 0.5rem;
  font-size: 40px;
  border: 1px solid #9F21E3;
  background-color: #9F21E3;
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