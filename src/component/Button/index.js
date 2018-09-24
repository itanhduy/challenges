import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import Text from '../Text'

const ButtonComponent = styled.div`
  ${props => {
    const { theme, styleName } = props
    const { color, createStyle } = theme
    return {
      border: `2px solid ${color.primary}`,
      padding: '5px',
      cursor: 'pointer',
      ...createStyle(styleName, 'button'),
    }
  }};
`

class Button extends PureComponent {
  render() {
    const { children, textProps } = this.props
    return (
      <ButtonComponent styleName="borderRadius">
        <Text {...textProps}>{children}</Text>
      </ButtonComponent>
    )
  }
}

Button.propsType = {
  children: PropTypes.any,
  textProps: PropTypes.object,
}

export default withTheme(Button)
