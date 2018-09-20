import React, { PureComponent } from 'react'
import styledComponents, { withTheme } from 'styled-components'
import PropTypes from 'prop-types'

const RowComponent = styledComponents.div`
  ${props => {
    const { styleName, theme } = props
    const { createStyle } = theme
    return {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      flex: 1,
      ...createStyle(styleName, 'row'),
    }
  }}
`

class Row extends PureComponent {
  render() {
    const { children } = this.props
    return <RowComponent>{children}</RowComponent>
  }
}

Row.propTypes = {
  styleName: PropTypes.string,
  style: PropTypes.object,
  theme: PropTypes.object,
  createStyle: PropTypes.func,
  children: PropTypes.any,
}

export default withTheme(Row)
export { RowComponent }
