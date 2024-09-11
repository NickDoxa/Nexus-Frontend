import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-vue'

const url = 'http://localhost:8080'

const options = {
  method: 'POST',
  url: 'https://dev-s7xe4pizb5jvcb3g.us.auth0.com/oauth/token',
  headers: {'content-type': 'application/x-www-form-urlencoded'},
  data: new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: '5cYw3fO5RocdkxwQEw7K0msYfrmWFlAz',
    client_secret: 'wJIfcJ5J7xmFf6Zqv3PJaUt4EywOwsRBXOmP7A1sfzi8yw4ANNYLHy64sahFE0Uv',
    audience: 'http://localhost:8080'
  })
};
const getAuthenticatedToken = async () => {
  try {
    const response = await axios.request(options)
    console.log(response.data.access_token)
    return response.data.access_token
  } catch (error) {
    console.log(error)
  }
}

export module HttpAPI {
  export async function useAPI() {
    const token = await getToken()
    return axios.create({
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`
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
      const api = await useAPI()
      return api.get('/api/home/user-count')
    } catch (error) {
      console.log(error)
    }
  }

  export async function getSession() {
    try {
      const api = await useAPI()
      return api.get('/api/dev/session')
    } catch (error) {
      console.log(error)
    }
  }

}
