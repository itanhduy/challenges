import React, { PureComponent } from 'react'
import styledComponents from 'styled-components'
import { WithTheme } from '../../theme'
import PropTypes from 'prop-types'

const ScreenComponent = styledComponents.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1
`

class Screen extends PureComponent {
  render() {
    const { children } = this.props
    return <ScreenComponent {...this.props}>{children}</ScreenComponent>
  }
}

Screen.propTypes = {
  children: PropTypes.any,
}

export default WithTheme(Screen)
export { ScreenComponent }
