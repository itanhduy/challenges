import { CharityType } from '../types'

const CharityAction = {
  /**
   * Update total donate
   * @param {Number} total The total number
   */
  updateTotalDonate: total => {
    return {
      type: CharityType.UPDATE_TOTAL_DONATE,
      total,
    }
  },
}

export default CharityAction
