import React, { PureComponent } from 'react'
import styled, { withTheme } from 'styled-components'

const DividerComponent = styled.div`
  ${props => {
    const { theme, styleName } = props
    const { color, createStyle } = theme
    return {
      borderBottom: `1px solid ${color.border}`,
      opacity: 0.5,
      ...createStyle(styleName, 'divider'),
    }
  }};
`

class Divider extends PureComponent {
  render() {
    return <DividerComponent styleName="width-100" />
  }
}

export default withTheme(Divider)
