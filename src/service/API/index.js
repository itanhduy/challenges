import Server from './Server'

const API = {
  /**
   * Get all charities
   */
  charities: () => {
    return Server.get('charities')
  },
  /**
   * Get all payments
   */
  payments: () => {
    return Server.get('payments')
  },
  /**
   * Get chariry information
   * @param {Number} id The id of charity
   */
  getCharity: id => {
    return Server.get(`charities/${id}`)
  },
  /**
   * Get payments options
   * @param {Number} id The id of charity
   */
  getPayments: id => {
    return Server.get('payments', {
      params: {
        charitiesId: id,
      },
    })
  },
}

export default API

export { Server }
