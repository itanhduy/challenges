import React, { PureComponent } from 'react'
import styledComponents, { withTheme } from 'styled-components'
import PropTypes from 'prop-types'

const ScreenComponent = styledComponents.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1
`

class Screen extends PureComponent {
  render() {
    const { children, styleName, theme, style } = this.props
    const { createStyle } = theme
    return (
      <ScreenComponent {...this.props} style={createStyle(styleName, 'flexbox', style)}>
        {children}
      </ScreenComponent>
    )
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
