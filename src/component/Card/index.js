import React, { PureComponent, Component } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import Image from '../Image'
import Text from '../Text'

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
  /**
   * Render right component
   * The right component can be a class, object or a function
   * @return {PureComponent} The right component was executed
   */
  renderRightComponent = () => {
    const { rightComponent } = this.props
    switch (typeof rightComponent) {
      /**
       * If rightComponent is a function
       * So we just need to execute as function with ()
       */
      case typeof Function:
        return rightComponent()
      /**
       * If rightComponent is a instance of PureComponent or Component
       * We need to create new element
       */
      case typeof PureComponent:
      case typeof Component:
        return React.createElement(rightComponent)
      /**
       * Out of out our cases them return rightComponent directly
       */
      default:
        return rightComponent
    }
  }

  render() {
    const { data } = this.props
    const { name, image } = data
    const createRightComponent = this.renderRightComponent()
    return (
      <CardWrapper {...this.props} styleName="flexible v-center bounceIn">
        <CardComponent {...this.props} styleName="borderRadius">
          <Image url={image} height={200} />
          <CardContent styleName="flexible h-center space-between">
            <Text styleName="medium">{name}</Text>
            {createRightComponent}
          </CardContent>
        </CardComponent>
      </CardWrapper>
    )
  }
}

Card.propTypes = {
  /**
   * The right component for card
   */
  rightComponent: PropTypes.any,
  /**
   * How many columns you want to show?
   * Use it for creating layout
   */
  columns: PropTypes.number.isRequired,
  /**
   * The padding for card.
   * Default is 15px
   */
  cardPadding: PropTypes.number,
  /**
   * The data for showing inside card
   * Included: Image, text and the right component
   */
  data: PropTypes.object,
}

Card.defaultProps = {
  columns: 2,
  cardPadding: 15,
}

export default withTheme(Card)
