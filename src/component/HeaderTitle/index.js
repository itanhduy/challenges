import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styledComponents, { withTheme } from 'styled-components'

const HeaderTitleComponent = styledComponents.div``

class HeaderTitle extends PureComponent {
  render() {
    const { children, theme, styleName, style } = this.props
    const { createStyle } = theme
    return (
      <HeaderTitleComponent {...this.props} style={createStyle(styleName, 'typography', style)}>
        {children}
      </HeaderTitleComponent>
    )
  }
}

HeaderTitle.propTypes = {
  children: PropTypes.string,
}

export default withTheme(HeaderTitle)
