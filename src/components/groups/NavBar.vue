<script setup lang="ts">
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'
import FadedComponent from '@/components/animations/FadedComponent.vue'
import HoverScale from '@/components/animations/HoverScale.vue'
import ActionButton from '@/components/buttons/ActionButton.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'
import RequireAuthentication from '@/components/groups/RequireAuthentication.vue'
import { useAuth0 } from '@auth0/auth0-vue'

const { loginWithRedirect, logout } = useAuth0()
const handleLogin = () => {
  loginWithRedirect({
    appState: {
      target: '/'
    },
    authorizationParams: {
      screen_hint: 'login'
    }
  })
}

const handleSignup = () => {
  loginWithRedirect({
    appState: {
      target: '/'
    },
    authorizationParams: {
      screen_hint: 'signup'
    }
  })
}

const handleLogout = () => {
  logout({
    logoutParams: {
      returnTo: window.location.origin
    }
  })
}
const { isAuthenticated } = useAuth0()
const dropdownOpen = ref<Boolean>(false)
const openMenu = () => (dropdownOpen.value = !dropdownOpen.value)
</script>

<template>
  <header>
    <div id="nav" class="nav-bar">
      <div class="side-container">
        <img alt="game nexus icon" src="../../../public/iconLogo.png" class="icon" />
      </div>
      <ul class="nav-links">
        <li><RouterLink to="/">Nexus</RouterLink></li>
        <li><RouterLink to="/directory">Directory</RouterLink></li>
        <li v-if="!isAuthenticated"><a @click="handleLogin" style="cursor: pointer">Login</a></li>
        <li v-else><RouterLink to="/account">Account</RouterLink></li>
      </ul>
      <div class="side-container">
        <RequireAuthentication :reverse="true">
          <FadedComponent :scroll="false">
            <HoverScale :scalesize="1.03">
              <div @click="handleSignup">
                <ActionButton
                  style="float: right"
                  :textdecoration="false"
                  :backgroundcolor="'#5B058A'"
                  :textcolor="'#F2EBFB'"
                  :hovercolor="'#F2EBFB'"
                  :linkto="'#'"
                  :isrouterlink="false"
                  :text="'Sign Up'"
                />
              </div>
            </HoverScale>
          </FadedComponent>
        </RequireAuthentication>
      </div>
      <div class="toggle-btn">
        <a href="#" @click="openMenu" v-if="!dropdownOpen"><FontAwesomeIcon :icon="faBars" /></a>
        <a href="#" @click="openMenu" v-else><FontAwesomeIcon :icon="faXmark" /></a>
      </div>
    </div>
    <div class="dropdown-menu" :class="{ open: dropdownOpen }">
      <ul>
        <li><RouterLink to="/">Nexus</RouterLink></li>
        <li><RouterLink to="/directory">Directory</RouterLink></li>
        <RequireAuthentication :reverse="true">
          <li><a href="#" @click="handleLogin">Login</a></li>
          <li><a href="#" @click="handleSignup">Sign Up</a></li>
        </RequireAuthentication>
        <RequireAuthentication :reverse="false">
          <li><RouterLink to="/account">Account</RouterLink></li>
          <li><a href="#" @click="handleLogout">Logout</a></li>
        </RequireAuthentication>
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
