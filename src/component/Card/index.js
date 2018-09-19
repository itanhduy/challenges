import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styledComponents from 'styled-components'

const CardComponent = styledComponents.div``

class Card extends PureComponent {
  render() {
    const { data } = this.props
    return <CardComponent>AA</CardComponent>
  }
}

Card.propTypes = {
  data: PropTypes.object,
}

export default Card
