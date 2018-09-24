/**
 * This function for creating styling based on styleName
 * Andy Ng
 * 2018-09-19 15:59:36
 */
import { split, merge } from 'lodash'

/**
 *
 * @param {*} styleName The style name from user. For example: "h-center v-center vertical", "bold big-size"
 * @param {*} theme The theme was defined before check forder /theme
 * @return {Object} The style properties
 */
const createStyle = (styleName, theme, defaultStyle) => {
  if (styleName) {
    const styleObjects = {}
    split(styleName.trim(), ' ').forEach(name => {
      const getStyle = theme[name]
      /**
       * Check if style name is undefined or not
       * if style is undefined then return
       * Because we don't have value to use
       */
      if (!getStyle) {
        console.warn(`Invalid style for name: ${name}. Please check again the name, make sure you use correct one`)
        return
      }
      const getKey = Object.keys(getStyle)
      styleObjects[getKey] = theme[name][getKey]
    })
    return merge(styleObjects, defaultStyle)
  }
  return defaultStyle
}

export default createStyle
