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
      padding: '15px',
      ...createStyle(styleName, 'card'),
    }
  }};
`

const CardComponent = styled.div`
  ${props => {
    const { theme, styleName } = props
    const { createStyle } = theme
    return {
      width: '100%',
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
    const { data, columns } = this.props
    return (
      <CardWrapper {...this.props}>
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
  data: PropTypes.object,
}

Card.defaultProps = {
  columns: 2,
}

export default withTheme(Card)
