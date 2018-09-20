import FlexBox from './FlexBox'
import Typography from './Typography'
import CreateStyle from './CreateStyle'

const MergeTheme = {
  /**
   * Flexbox will be default for all emements
   * Because all of theme support flex box properties
   */
  flexBox: FlexBox,
  /**
   * Only for typography components
   */
  typography: Typography,
  createStyle: (styleName, elementType) => {
    return CreateStyle(styleName, {
      ...MergeTheme.flexBox,
      ...MergeTheme[elementType],
    })
  },
}

export default MergeTheme
export { FlexBox, Typography, Merged }
