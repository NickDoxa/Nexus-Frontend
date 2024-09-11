import './assets/main.css'

import { createApp } from 'vue'
import { createAuth0 } from '@auth0/auth0-vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import AnimateOnScroll from 'primevue/animateonscroll'
import Nora from '@primevue/themes/nora'
import { definePreset } from '@primevue/themes'

const app = createApp(App)
const NexusPreset = definePreset(Nora, {
  semantic: {
    primary: {
      50: '{purple.50}',
      100: '{purple.100}',
      200: '{purple.200}',
      300: '{purple.300}',
      400: '{purple.400}',
      500: '{purple.500}',
      600: '{purple.600}',
      700: '{purple.700}',
      800: '{purple.800}',
      900: '{purple.900}',
      950: '{purple.950}'
    }
  }
})

app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: NexusPreset
  }
})
app.use(createAuth0({
  domain: import.meta.env.VITE_AUTH0_DOMAIN,
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
  authorizationParams: {
    redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
    audience: import.meta.env.VITE_AUTH0_AUDIENCE,
    scope: 'openid email profile'
  },
}))
app.directive('animateonscroll', AnimateOnScroll)
app.mount('#app')
