import FlexBox from './FlexBox'
import Typography from './Typography'
import CreateStyle from './CreateStyle'
import Gutters from './Gutters'

const MergeTheme = {
  /**
   * A gutter is an empty space between a component’s boundaries and the component’s content.
   */
  gutters: Gutters,
  /**
   * Flexbox will be default for all emements
   * Because all of theme support flex box properties
   */
  flexBox: FlexBox,
  /**
   * Only for typography components
   */
  typography: Typography,
  createStyle: (styleName, elementType, defaultStyle) => {
    return CreateStyle(
      styleName,
      {
        ...MergeTheme.gutters,
        ...MergeTheme.flexBox,
        ...MergeTheme[elementType],
      },
      defaultStyle,
    )
  },
}

export default MergeTheme
export { FlexBox, Typography, Merged }
