import React, { PureComponent } from 'react'
import styledComponents from 'styled-components'
import PropTypes from 'prop-types'

const ScreenComponent = styledComponents.div`

`

class Screen extends PureComponent {
  render() {
    const { children } = this.props
    return <ScreenComponent>{children}</ScreenComponent>
  }
}

Screen.propTypes = {
  children: PropTypes.any,
}

export default Screen
export { ScreenComponent }
