<script setup lang="ts">
import ActionButton from '@/components/buttons/ActionButton.vue'
import { useAuth0 } from '@auth0/auth0-vue'
const {logout} = useAuth0()

const props = defineProps<{
  validated: Boolean
}>()

const handleLogout = () => {
  logout({
    logoutParams: {
      returnTo: window.location.origin
    }
  })
}
</script>

<template>
  <div class="centered-content pushed-down transition-in animate-fadein"
       :class="{'hidden' : !validated, 'shown' : validated}"
       @click="handleLogout">
    <ActionButton linkto="#"
                  text="Logout"
                  :backgroundcolor="'#5B058A'"
                  :textcolor="'#F2EBFB'"
                  :minbtnwidth="'7rem'"
                  :btnwidth="'8rem'"
    />
  </div>
</template>