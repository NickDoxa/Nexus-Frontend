<script setup lang="ts">
import ActionButton from '@/components/buttons/ActionButton.vue'
import { useAuth0 } from '@auth0/auth0-vue'
const { logout } = useAuth0()

const handleLogout = () => {
  logout({
    logoutParams: {
      returnTo: window.location.origin
    }
  })
}
</script>

<template>
  <div @click="handleLogout" style="margin-top: 2rem">
    <ActionButton
      linkto="#"
      text="Logout"
      :backgroundcolor="'#5B058A'"
      :textcolor="'#F2EBFB'"
      :minbtnwidth="'7rem'"
      :btnwidth="'8rem'"
    />
  </div>
</template>
