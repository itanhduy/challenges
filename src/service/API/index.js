import Server from './Server'
import { AxiosInstance } from 'axios'

/**
 * Create API with some methods to get data from server
 * @param {AxiosInstance} ServerInstance The server instace was create by axios
 */
const CreateAPI = ServerInstance => ({
  /**
   * Get all charities
   */
  charities: () => {
    return ServerInstance.get('charities')
  },
  /**
   * Get all payments
   */
  payments: () => {
    return ServerInstance.get('payments')
  },
  /**
   * Get specific payment information
   * @param {Number} id The id of payment
   */
  payment: id => {
    return ServerInstance.get(`payments/${id}`)
  },
  /**
   * Get chariry information
   * @param {Number} id The id of charity
   */
  getCharity: id => {
    return ServerInstance.get(`charities/${id}`)
  },
  /**
   * Get payments options
   * @param {Number} id The id of charity
   */
  getPayments: id => {
    return ServerInstance.get('payments', {
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
    return ServerInstance.post('payments', { charitiesId: id, amount: amount, currency: currency })
  },
})

const API = CreateAPI(Server)

export default API

export { Server, CreateAPI }
