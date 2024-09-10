import axios from 'axios'

export default(url="http://localhost:8080") => {
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:8080'
    },
    baseURL: url,
    auth: {
      username: 'admin',
      password: 'password'
    },
    withCredentials: true
  })
}