import axios from 'axios'

export default(username, password) => {
  const url ="http://localhost:8080"
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:8080'
    },
    baseURL: url,
    auth: {
      username: username,
      password: password
    },
    withCredentials: true
  })
}