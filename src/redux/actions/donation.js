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
  /**
   * Store selected campaign
   * @param {Object} campaign The campaign information
   */
  selectedCampaign: campaign => {
    return {
      type: DonationType.SELECTED_CAMPAIGN,
      campaign,
    }
  },
}

export default DonationAction
