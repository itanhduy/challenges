import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import Text from '../Text'

const ButtonComponent = styled.div``

class Button extends PureComponent {
  render() {
    const { children, textProps } = this.props
    return (
      <ButtonComponent>
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
