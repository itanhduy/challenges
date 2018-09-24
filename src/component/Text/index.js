import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import accounting from 'accounting'
import styledComponents, { withTheme } from 'styled-components'

/**
 * Create instance for Text
 */
let TextComponent = styledComponents.div`
  ${props => {
    const { styleName, theme } = props
    const { createStyle, color } = theme
    return {
      ...color.textSecondary,
      ...createStyle(styleName, 'typography'),
    }
  }}
`

class Text extends PureComponent {
  /**
   * Render text
   * @return {String} The pure text or the text with formatting
   */
  renderText = () => {
    const { formatMoney, currency, children } = this.props
    switch (formatMoney) {
      case true:
        return accounting.formatMoney(children, { symbol: currency, format: '%v %s' })
      default:
        return children
    }
  }

  render() {
    return <TextComponent {...this.props}>{this.renderText()}</TextComponent>
  }
}

Text.propTypes = {
  formatMoney: PropTypes.bool,
  currency: PropTypes.string,
  children: PropTypes.any,
}

Text.defaultProps = {
  formatMoney: false,
  currency: 'USD',
}

export default withTheme(Text)
