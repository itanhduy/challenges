import { DonationType } from '../types'

const initialState = {
  info: {},
}

const DonationReducer = (state = initialState, action) => {
  switch (action.type) {
    case DonationType.ADD_NEW_DONATION:
      return {
        ...state,
        info: action.info,
      }
    default:
      return state
  }
}

export default DonationReducer
