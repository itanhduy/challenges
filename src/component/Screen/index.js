import React, { PureComponent } from 'react'
import styledComponents, { withTheme } from 'styled-components'
import PropTypes from 'prop-types'

let ScreenComponent = styledComponents.div

class Screen extends PureComponent {
  componentWillMount() {
    /**
     * Start creating style for ScreenComponent
     * Based on `styleName` and `style`
     */
    const { theme, styleName, style } = this.props
    const { createStyle } = theme
    ScreenComponent = ScreenComponent`      
      display: flex;
      justify-content: center;
      flex-direction: column;
      flex: 1;
      ${createStyle(styleName, 'flexbox')}
    `
  }

  render() {
    const { children, theme } = this.props
    return <ScreenComponent {...this.props}>{children}</ScreenComponent>
  }
}

Screen.propTypes = {
  styleName: PropTypes.string,
  style: PropTypes.object,
  theme: PropTypes.object,
  createStyle: PropTypes.func,
  children: PropTypes.any,
}

export default withTheme(Screen)
export { ScreenComponent }
