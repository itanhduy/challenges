import axios from 'axios'

const Server = axios.create({
  baseURL: 'http://192.168.1.4:3001',
})

export default Server
