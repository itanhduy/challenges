import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import Image from '../Image'
import Text from '../Text'

const CardWrapper = styled.div`
  ${props => {
    const { columns } = props
    return {
      width: `${100 / columns}%`,
      padding: '15px',
    }
  }};
`

const CardComponent = styled.div`
  ${props => {
    const { theme } = props
    return {
      width: '100%',
      ...theme.general.boxShadow,
    }
  }};
`

const CardContent = styled.div`
  ${props => {
    const { theme } = props
    return {
      padding: '25px 15px',
    }
  }};
`

class Card extends PureComponent {
  render() {
    const { data, columns } = this.props
    return (
      <CardWrapper {...this.props}>
        <CardComponent {...this.props}>
          <Image url={data.image} height={200} />
          <CardContent>
            <Text styleName="medium">{data.name}</Text>
          </CardContent>
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
