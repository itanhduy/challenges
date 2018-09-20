import React, { PureComponent } from 'react'
import styled, { withTheme } from 'styled-components'
import PropTypes from 'prop-types'

const ScreenComponent = styled.div`
  ${props => {
    const { styleName, theme } = props
    const { createStyle } = theme
    return {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      flex: 1,
      ...createStyle(styleName, 'screen'),
    }
  }};
`

class Screen extends PureComponent {
  render() {
    const { children } = this.props
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
