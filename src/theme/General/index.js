/**
 * Define general values
 * Andy Ng
 * 2018-09-21 15:48:56
 */

import Covert from '../Convert'
import Color from '../Color'

const CreateWith = () => {
  const widthObject = {}
  for (let i = 0; i <= 100; i++) {
    widthObject[`width-${i}`] = { width: `${i}%` }
  }
  return widthObject
}

const General = {
  fullWidth: {
    width: '100%',
  },
  fullHeight: {
    height: '100%',
  },
  boxShadow: {
    'box-shadow': `0px 1px 20px 0px ${Covert.colorOpacity(Color.text)};`,
  },
  borderRadius: {
    'border-radius': '3px',
  },
  ...CreateWith(),
}

export default General
