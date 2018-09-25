import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

const BackdropComponent = styled.div`
  ${props => {
    const { theme, styleName } = props
    const { createStyle, color, convert } = theme
    return {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: convert.colorOpacity(color.text, 0.9),
      ...createStyle(styleName, 'backdrop'),
    }
  }};
`

class Backdrop extends PureComponent {
  render() {
    const { children } = this.props
    return (
      <BackdropComponent {...this.props} styleName="fadeIn flexible v-center h-center">
        {children}
      </BackdropComponent>
    )
  }
}

Backdrop.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default withTheme(Backdrop)
