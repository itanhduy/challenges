import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styledComponents, { withTheme } from 'styled-components'

/**
 * Create instance for Text
 */
let TextComponent = styledComponents.div`
  ${props => {
    const { styleName, theme } = props
    const { createStyle } = theme
    return {
      ...createStyle(styleName, 'typography'),
    }
  }}
`

class Text extends PureComponent {
  render() {
    const { children } = this.props
    return <TextComponent {...this.props}>{children}</TextComponent>
  }
}

Text.propTypes = {
  children: PropTypes.string,
}

export default withTheme(Text)
