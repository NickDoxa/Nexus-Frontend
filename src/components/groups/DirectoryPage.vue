<script setup lang="ts">
import GridGroup from '@/components/groups/GridGroup.vue'
import { onBeforeMount, ref } from 'vue'
import { HttpAPI } from '@/common/API'
import DirectoryCard from '@/components/cards/DirectoryCard.vue'

const props = defineProps<{
  size: Number
}>()

const page = ref<Number>(0)
const responseReceived = ref<boolean>(false)
const emptyResponse = ref<boolean>(false)
const currentCards = ref<Object[]>()

onBeforeMount(async () => {
  const response = await HttpAPI.getDirectoryPage(page.value, props.size);
  const page_data = response.data
  currentCards.value = page_data.content
  emptyResponse.value = currentCards.value.length < 0
  responseReceived.value = true
})
</script>

<template>
  <div v-if="!responseReceived">
    <img src="@/assets/images/loading.svg" alt="loading" />
  </div>
  <GridGroup columns="1fr 1fr 1fr" v-else-if="responseReceived && !emptyResponse">
    <div v-for="card in currentCards">
      <DirectoryCard :user="card"/>
    </div>
  </GridGroup>
  <div class="centered-content pushed-down" v-else>
    <p style="font-size: 2rem;">No cards found!</p>
  </div>
</template>

<style scoped>

</style>