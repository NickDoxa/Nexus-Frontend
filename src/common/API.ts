import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-vue'

const url = 'http://localhost:8080'

export module HttpAPI {
  export async function useAPI() {
    const token = await getToken()
    return axios.create({
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
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
    const { getAccessTokenSilently } = useAuth0()
    return await getAccessTokenSilently()
  }

  export async function getCount() {
    try {
      const api = await useAPIWithoutToken()
      return api.get('/api/home/user-count')
    } catch (error) {
      console.log(error)
    }
  }

}
