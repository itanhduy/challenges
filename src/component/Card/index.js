import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import Image from '../Image'
import Text from '../Text'

const CardWrapper = styled.div`
  ${props => {
    const { columns, theme, styleName } = props
    const { createStyle } = theme
    return {
      width: `${100 / columns}%`,
      ...createStyle(styleName, 'card'),
    }
  }};
`

const CardComponent = styled.div`
  ${props => {
    const { theme, cardPadding, styleName } = props
    const { createStyle } = theme
    return {
      width: `calc(100% - ${cardPadding}px)`,
      overflow: 'hidden',
      ...theme.general.boxShadow,
      ...createStyle(styleName, 'card'),
    }
  }};
`

const CardContent = styled.div`
  ${props => {
    const { theme, styleName } = props
    const { createStyle } = theme
    return {
      padding: '25px 15px',
      ...createStyle(styleName, 'card'),
    }
  }};
`

class Card extends PureComponent {
  render() {
    const { data } = this.props
    return (
      <CardWrapper {...this.props} styleName="flexible v-center">
        <CardComponent {...this.props} styleName="borderRadius">
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
  cardPadding: PropTypes.number,
  data: PropTypes.object,
}

Card.defaultProps = {
  columns: 2,
  cardPadding: 15,
}

export default withTheme(Card)
