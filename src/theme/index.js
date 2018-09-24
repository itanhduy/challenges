import FlexBox from './FlexBox'
import Typography from './Typography'
import CreateStyle from './CreateStyle'
import Gutters from './Gutters'
import General from './General'
import Row from './Row'
import Color from './Color'
import Animation from './Animation'

const MergeTheme = {
  /**
   * A list of animation for this application
   */
  animation: Animation,
  /**
   * A list of colors for this application
   */
  color: Color,
  /**
   * Styling for Row
   */
  row: Row,
  /**
   * A general styling
   */
  general: General,
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
        ...MergeTheme.general,
        ...MergeTheme.color,
        ...MergeTheme.animation,
        ...MergeTheme[elementType],
      },
      defaultStyle,
    )
  },
}

export default MergeTheme
export { FlexBox, Typography, Merged }
