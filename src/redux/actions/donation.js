import { DonationType } from '../types'

const DonationAction = {
  /**
   * Store new donation
   * @param {Object} info The info of new donation
   */
  addNewDonation: info => {
    return {
      type: DonationType.ADD_NEW_DONATION,
      info,
    }
  },
}

export default DonationAction
