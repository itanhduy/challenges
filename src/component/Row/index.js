import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styledComponents from 'styled-components'

const RowComponent = styledComponents.div`
  display: flex;
  flex-direction: row;
`

class Row extends PureComponent {
  render() {
    const { children } = this.props
    return <RowComponent>{children}</RowComponent>
  }
}

Row.propTypes = {
  children: PropTypes.any,
}

export default Row
