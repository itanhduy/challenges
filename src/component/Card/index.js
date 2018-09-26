import React, { PureComponent, Component } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import Row from '../Row'
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
    const { theme, styleName, cardContentProps, cardContentBottomProps } = props
    const { createStyle } = theme
    return {
      /**
       * Default padding for content is 25px for bottom/top and 15px for left/right
       */
      padding: '25px 15px',
      ...cardContentProps,
      ...cardContentBottomProps,
      ...createStyle(styleName, 'card'),
    }
  }};
`

class Card extends PureComponent {
  /**
   * Render right component
   * The right component can be a class, object or a function
   * @param {any} instanceComponent The instance component that needs to render
   * @return {PureComponent} The right component was executed
   */
  renderExtendedComponent = instanceComponent => {
    const { data } = this.props
    switch (typeof instanceComponent) {
      /**
       * If rightComponent is a function
       * So we just need to execute as function with ()
       */
      case typeof Function:
        return instanceComponent(data)
      /**
       * If rightComponent is a instance of PureComponent or Component
       * We need to create new element
       */
      case typeof PureComponent:
      case typeof Component:
        return React.createElement(instanceComponent)
      /**
       * Out of out our cases them return rightComponent directly
       */
      default:
        return instanceComponent
    }
  }

  render() {
    const { data, rightComponent, bottomComponent, descriptionComponent } = this.props
    const { name, image } = data
    const createRightComponent = this.renderExtendedComponent(rightComponent)
    const createBottomComponent = this.renderExtendedComponent(bottomComponent)
    const createDescriptionComponent = this.renderExtendedComponent(descriptionComponent)
    return (
      <CardWrapper {...this.props} styleName="flexible v-center h-center bounceIn">
        <CardComponent {...this.props} styleName="borderRadius">
          <Image url={image} height={200} />
          <CardContent {...this.props} styleName="flexible h-center space-between">
            <Row styleName="vertical">
              <Text styleName="medium">{name}</Text>
              {createDescriptionComponent}
            </Row>
            {createRightComponent}
          </CardContent>
          {createBottomComponent && <CardContent>{createBottomComponent}</CardContent>}
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
  bottomComponent: PropTypes.any,
  descriptionComponent: PropTypes.any,
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
   * The props for CardContent
   */
  cardContentProps: PropTypes.object,
  /**
   * The props for CardContent at bottom
   */
  cardContentBottomProps: PropTypes.object,
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
