<script setup>
import { computed } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps({
  backgroundcolor: String,
  color: String,
  header: String,
  text: String,
  useicon: Boolean,
  icon: Object
})

const styleObj = computed(() => {
  return {
    '--card-background-color': props.backgroundcolor,
    '--card-color' : props.color,
  }
})
</script>

<template>
  <div class="info-card" :style="styleObj">
    <div class="info-card-inner">
      <FontAwesomeIcon v-if="props.useicon" :icon="props.icon" class="info-card-icon"/>
      <h2>{{props.header}}</h2>
      <br/>
      <p>{{props.text}}</p>
    </div>
  </div>
</template>

<style scoped>
.info-card {
  height: 400px;
  width: 60%;
  margin: auto;
  color: var(--card-color);
  background-color: var(--card-background-color);
  border-radius: 25px;
  justify-content: center;
}

.info-card-inner {
  padding-top: 20%;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
}

.info-card-icon {
  font-size: 40px;
  padding: 20px;
  margin-bottom: 10%;
  border-radius: 45px;
  border: 2px solid var(--card-color);
}
</style>