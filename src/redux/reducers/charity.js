import { CharityType } from '../types'

const initialState = {
  total: 0,
  message: String(),
}

const CharityReducer = (state = initialState, action) => {
  switch (action.type) {
    case CharityType.UPDATE_TOTAL_DONATE:
      return {
        ...state,
        total: action.total,
      }
    case CharityType.UPDATE_MESSAGE:
      return {
        ...state,
        message: action.message,
      }
    default:
      return state
  }
}

export default CharityReducer
