import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import Text from '../Text'

const ButtonComponent = styled.div``

class Button extends PureComponent {
  render() {
    const { text, textProps } = this.props
    return (
      <ButtonComponent>
        <Text {...textProps}>{text}</Text>
      </ButtonComponent>
    )
  }
}

Button.propsType = {
  text: PropTypes.string,
  textProps: PropTypes.object,
}

export default withTheme(Button)
