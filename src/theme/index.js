import FlexBox from './FlexBox'
import Typography from './Typography'
import CreateStyle from './CreateStyle'
import Gutters from './Gutters'
import General from './General'
import Row from './Row'
import Color from './Color'
import Animation from './Animation'
import Convert from './Convert'
import Responsive from './Responsive'

const MergeTheme = {
  responsive: Responsive,
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
  /**
   * Included function that helps to convert color and etc...
   */
  convert: Convert,
  /**
   * Create style depends on styleName
   * @param {String} styleName The styleName such as: md-gutter, bold, vertical...
   * @param {String} elementType The type of element such as: Row, Text, Image...
   * @param {Object} defaultStyle The default object
   */
  createStyle: (styleName, elementType, defaultStyle) => {
    return CreateStyle(
      styleName,
      {
        /**
         * Include default theme for all elements
         */
        ...MergeTheme.gutters,
        ...MergeTheme.flexBox,
        ...MergeTheme.general,
        ...MergeTheme.color,
        ...MergeTheme.animation,
        /**
         * Include specific styling for element
         */
        ...MergeTheme[elementType],
      },
      defaultStyle,
    )
  },
}

export default MergeTheme
export { FlexBox, Typography, CreateStyle, Gutters, General, Row, Color, Animation, Convert, Responsive }
