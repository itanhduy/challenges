import { DonationType } from '../types'

const initialState = {
  info: {},
  campaign: {},
}

const DonationReducer = (state = initialState, action) => {
  switch (action.type) {
    case DonationType.ADD_NEW_DONATION:
      return {
        ...state,
        info: action.info,
      }
    case DonationType.SELECTED_CAMPAIGN:
      return {
        ...state,
        campaign: action.campaign,
      }
    default:
      return state
  }
}

export default DonationReducer
