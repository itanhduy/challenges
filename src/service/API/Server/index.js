import axios from 'axios'

const API = axios.create({
  baseURL: 'http://192.168.1.4:3001',
})

export default API
