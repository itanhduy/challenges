/**
 * This function for creating styling based on styleName
 * Andy Ng
 * 2018-09-19 15:59:36
 */
import { forOwn, split, merge } from 'lodash'

/**
 *
 * @param {*} styleName The style name from user. For example: "h-center v-center vertical", "bold big-size"
 * @param {*} theme The theme was defined before check forder /theme
 * @return {Object} The style properties
 */
const createStyle = (styleName, customStyle, theme) => {
  if (styleName) {
    const styleObjects = {}
    split(styleName, ' ').forEach(name => {
      const getStyle = theme[name]
      const getKey = Object.keys(getStyle)
      styleObjects[getKey] = theme[name][getKey]
    })
    return merge(styleObjects, customStyle)
  }
  return
}

export default createStyle
