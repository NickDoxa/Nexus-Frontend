<script setup lang="ts">
import FadedComponent from '@/components/animations/FadedComponent.vue'
import DirectoryPage from '@/components/groups/DirectoryPage.vue'
import SearchBar from '@/components/forms/SearchBar.vue'
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'
</script>
<template>
  <div class="centered-content pushed-down">
    <FadedComponent>
      <SearchBar :use-icon="true" :icon="faSearch" />
      <ScrollPanel style="height:40rem;">
        <DirectoryPage :size="10"/>
      </ScrollPanel>
    </FadedComponent>
  </div>
</template>