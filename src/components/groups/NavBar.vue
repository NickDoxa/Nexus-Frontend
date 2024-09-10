<script setup>

import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'
import FadedComponent from '@/components/animations/FadedComponent.vue'
import HoverScale from '@/components/animations/HoverScale.vue'
import ActionButton from '@/components/buttons/ActionButton.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'

const dropdownOpen = ref(false);
const openMenu = () => dropdownOpen.value = !dropdownOpen.value;

</script>

<template>
  <header>
    <div id="nav" class="nav-bar">
      <div class="side-container">
        <img alt="game nexus icon" src="@/assets/images/iconLogo.png" class="icon">
      </div>
      <ul class="nav-links">
        <li><RouterLink to="/">Nexus</RouterLink></li>
        <li><RouterLink to="/directory">Directory</RouterLink></li>
        <li><RouterLink to="/login">Login</RouterLink></li>
      </ul>
      <div class="side-container">
        <FadedComponent>
          <HoverScale :scalesize="1.03">
            <ActionButton style="float:right;"
                          :textdecoration="false"
                          :backgroundcolor="'#9F21E3'"
                          :textcolor="'#F2EBFB'"
                          :hovercolor="'#F2EBFB'"
                          :linkto="'/signup'"
                          :isrouterlink="true"
                          :text="'Sign Up'"
            />
          </HoverScale>
        </FadedComponent>
      </div>
      <div class="toggle-btn">
        <a href="#" @click="openMenu" v-if="!dropdownOpen"><FontAwesomeIcon :icon="faBars"/></a>
        <a href="#" @click="openMenu" v-else><FontAwesomeIcon :icon="faXmark"/></a>
      </div>
    </div>
    <div class="dropdown-menu" :class="{ 'open': dropdownOpen }">
      <ul>
        <li><RouterLink to="/">Nexus</RouterLink></li>
        <li><RouterLink to="/directory">Directory</RouterLink></li>
        <li><RouterLink to="/login">Login</RouterLink></li>
        <li><RouterLink to="/signup">Sign Up</RouterLink></li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
.side-container {
  width: 100%;
  height: 100%;
}
</style>