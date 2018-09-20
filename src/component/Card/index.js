import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import Image from '../Image'
import Text from '../Text'

const CardWrapper = styled.div`
  ${props => {
    const { columns } = props
    return {
      maxWidth: `${window.outerWidth / columns}px`,
    }
  }};
`

const CardComponent = styled.div`
  ${props => {
    const { theme } = props
    return {
      width: '100%',
    }
  }};
`

class Card extends PureComponent {
  render() {
    const { data, columns } = this.props
    return (
      <CardWrapper {...this.props}>
        <CardComponent {...this.props}>
          <Image url={data.image} height={200} width={window.outerWidth / columns} />
          <Text>{data.name}</Text>
        </CardComponent>
      </CardWrapper>
    )
  }
}

Card.propTypes = {
  columns: PropTypes.number.isRequired,
  data: PropTypes.object,
}

Card.defaultProps = {
  columns: 2,
}

export default withTheme(Card)
