import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styledComponents, { withTheme } from 'styled-components'

/**
 * Create instance for HeaderTitle
 */
let HeaderTitleComponent = styledComponents.div

class HeaderTitle extends PureComponent {
  componentWillMount() {
    /**
     * Start creating style for HeaderTitle
     * Based on `styleName` and `style`
     */
    const { theme, styleName } = this.props
    const { createStyle } = theme
    HeaderTitleComponent = HeaderTitleComponent`${createStyle(styleName, 'typography')}`
  }

  render() {
    const { children } = this.props
    return <HeaderTitleComponent {...this.props}>{children}</HeaderTitleComponent>
  }
}

HeaderTitle.propTypes = {
  children: PropTypes.string,
}

export default withTheme(HeaderTitle)
