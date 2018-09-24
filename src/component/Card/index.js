import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import Image from '../Image'
import Text from '../Text'
import Button from '../Button'

/**
 * This component for wrapper
 * We can control width of this card
 */
const CardWrapper = styled.div`
  ${props => {
    const { columns, theme, styleName } = props
    const { createStyle } = theme
    return {
      /**
       * Width of card wrapper
       * Depends on columns (default is 2)
       * For example columns is 2. Card's width will be 100 / 2 = 50%
       */
      width: `${100 / columns}%`,
      ...createStyle(styleName, 'card'),
    }
  }};
`

/**
 * This component for card
 * It will handle all content inside such as: Image, text, button...
 */
const CardComponent = styled.div`
  ${props => {
    const { theme, cardPadding, styleName } = props
    const { createStyle } = theme
    return {
      /**
       * Width of card component
       * Default will be 100% because it will follow CardWrapper's  width
       * Besides we need to minus this width to the padding (default is 15px) to see the gap between cards
       */
      width: `calc(100% - ${cardPadding}px)`,
      overflow: 'hidden',
      ...theme.general.boxShadow,
      ...createStyle(styleName, 'card'),
    }
  }};
`

/**
 * This component for card content
 * It will handle text and button and other components
 */
const CardContent = styled.div`
  ${props => {
    const { theme, styleName } = props
    const { createStyle } = theme
    return {
      /**
       * Default padding for content is 25px for bottom/top and 15px for left/right
       */
      padding: '25px 15px',
      ...createStyle(styleName, 'card'),
    }
  }};
`

class Card extends PureComponent {
  render() {
    const { data } = this.props
    return (
      <CardWrapper {...this.props} styleName="flexible v-center bounceIn">
        <CardComponent {...this.props} styleName="borderRadius">
          <Image url={data.image} height={200} />
          <CardContent styleName="flexible h-center space-between">
            <Text styleName="medium">{data.name}</Text>
            <Button textProps={{ styleName: 'textPrimary medium' }}>Donate</Button>
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
