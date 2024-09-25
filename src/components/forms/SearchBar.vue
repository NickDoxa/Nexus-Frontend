<script setup lang="ts">

import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps<{
  useIcon: Boolean
  icon: Object
}>()

const emits = defineEmits<{
  updateSearch: [search: string]
}>()

const currentSearch = ref<string>('')

</script>

<template>
  <div class="centered-content search-bar-box">
    <FloatLabel>
      <InputText type="text" v-model="currentSearch" size="large" id="search-bar-input" style="width: 40rem;"/>
      <label for="search-bar-input">Search <FontAwesomeIcon :icon="props.icon" /></label>
    </FloatLabel>
  </div>
</template>

<style scoped>
.search-bar-box {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>