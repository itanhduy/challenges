import Server from './Server'

const API = {
  charities: () => {
    return Server.get('charities')
  },
  payments: () => {
    return Server.get('payments')
  }
}

export default API

export { Server }
