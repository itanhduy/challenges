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
    const { children, textProps, styleName } = this.props
    return (
      <ButtonComponent {...this.props} styleName={`borderRadius h-center flexible ${styleName}`}>
        <Text {...textProps}>{children}</Text>
      </ButtonComponent>
    )
  }
}

Button.propsType = {
  styleName: PropTypes.string,
  children: PropTypes.any,
  textProps: PropTypes.object,
}

Button.defaultProps = {
  styleName: String(),
}

export default withTheme(Button)
