import axios from 'axios'
import { apiUrl } from './values'

const api = axios.create({
  baseURL: apiUrl
})

api.interceptors.request.use(config => {
  const token = sessionStorage.getItem('access_token')
  const headers = { ...config.headers } // spreadeia do request od use

  if (token) {
    headers.Authorization = `Bearer ${token}` // token do session
    headers.Accept = 'application/json'
  }

  return { ...config, headers } // retorna tds as configs da api e os cabeçalhos do axios
})

export default api

// headers: {
//   Authorization: 'Bearer ' + localStorage.getItem('id_token') || undefined,
//   'Content-Type': 'application/json',
//   Accept: 'application/json'
// }
