<script setup lang="ts">
import { computed } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps<{
  backgroundcolor?: String
  linkto: String
  text: String
  textcolor?: String
  hovercolor?: String
  textdecoration?: Boolean
  isrouterlink?: Boolean
  useicon?: Boolean
  icon?: Object
  btnwidth?: String
  minbtnwidth?: String
  target?: String
}>()

const styleObj = computed(() => {
  return {
    '--color-hover': props.hovercolor,
    '--color': props.textcolor,
    '--text-decoration': props.textdecoration ? '' : 'none'
  }
})
</script>

<template>
  <RouterLink :to="props.linkto" :style="styleObj" v-if="props.isrouterlink">
    <div
      class="action-btn"
      :style="{
        'background-color': props.backgroundcolor,
        width: props.btnwidth,
        'min-width': props.minbtnwidth
      }"
    >
      {{ props.text }}
      <span style="margin-left: 0.5rem">
        <FontAwesomeIcon v-if="props.useicon" :icon="props.icon" class="btn-icon" />
      </span>
    </div>
  </RouterLink>
  <a :href="props.linkto" :target="props.target" :style="styleObj" v-else>
    <div
      class="action-btn"
      :style="{
        'background-color': props.backgroundcolor,
        width: props.btnwidth,
        'min-width': props.minbtnwidth
      }"
    >
      {{ props.text }}
      <span style="margin-left: 0.5rem">
        <FontAwesomeIcon v-if="props.useicon" :icon="props.icon" class="btn-icon" />
      </span>
    </div>
  </a>
</template>

<style scoped>
.action-btn {
  margin-left: auto;
  margin-right: auto;
  padding: 0.5rem 2rem;
  border: none;
  outline: none;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
}

.btn-icon {
  font-size: 16px;
  margin: auto;
}

a {
  color: var(--color);
  text-decoration: var(--text-decoration);
}

a:hover {
  color: var(--color-hover);
}
</style>
