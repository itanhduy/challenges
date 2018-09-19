import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styledComponents from 'styled-components'

const HeaderTitleComponent = styledComponents.div``

class HeaderTitle extends PureComponent {
  render() {
    const { children } = this.props
    console.info(children)
    return <HeaderTitleComponent>{children}</HeaderTitleComponent>
  }
}

HeaderTitle.propTypes = {
  children: PropTypes.string,
}

export default HeaderTitle
