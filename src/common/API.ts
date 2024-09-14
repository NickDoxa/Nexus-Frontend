import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-vue'
import { ref } from 'vue'
import { UserDto } from '@/common/dto/user.dto'

const url = 'http://localhost:8080'

export module HttpAPI {
  const token = ref<String>()
  export async function useAPI() {
    await getToken()
    return axios.create({
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token.value}`
      },
      baseURL: url
    })
  }

  export async function useAPIWithoutToken() {
    return axios.create({
      headers: {
        'Content-Type': 'application/json'
      },
      baseURL: url
    })
  }

  export async function getToken() {
    if (!token.value || token.value === '') {
      const { getAccessTokenSilently } = useAuth0()
      token.value = await getAccessTokenSilently()
    }
    return token.value
  }

  export async function getCount() {
    try {
      const api = await useAPIWithoutToken()
      return api.get('/api/home/user-count')
    } catch (error) {
      console.log(error)
    }
  }

  export async function userExists(id: string) {
    try {
      const api = await useAPI()
      return api.get(`/api/account/${id}/exists`)
    } catch (error) {
      console.log(error)
    }
  }

  export async function createNewUser(user: UserDto) {
    try {
      const api = await useAPI()
      return api.post('/api/account/create', user)
    } catch (error) {
      console.log(error)
    }
  }

  export async function updateUser(user: UserDto) {
    try {
      const api = await useAPI()
      return api.patch('/api/account/edit', user)
    } catch (error) {
      console.log(error)
    }
  }

}
