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
   * Get specific payment information
   * @param {Number} id The id of payment
   */
  payment: id => {
    return Server.get(`payments/${id}`)
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
  /**
   * Create new payment
   * @param {Number} id The id of charity
   * @param {Number} amount The amount for this campaign
   * @param {String} currency The type of currency such as: USD
   */
  makeNewPayment: (id, amount, currency) => {
    return Server.post('payments', { charitiesId: id, amount: amount, currency: currency })
  },
}

export default API

export { Server }
