import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import Backdrop from '../Backdrop'
import Screen from '../Screen'
import Row from '../Row'
import Text from '../Text'

const DialogComponent = styled.div`
  ${props => {
    const { theme, styleName } = props
    const { color, createStyle } = theme
    return {
      position: 'absolute',
      backgroundColor: color.white,
      ...createStyle(styleName, 'dialog'),
    }
  }};
`

class Dialog extends PureComponent {
  componentDidMount() {
    /**
     * Remove scroll bar from body element
     */
    document.body.style.overflow = 'hidden'
  }

  componentWillUnmount() {
    /**
     * Rollback default styling for body element
     */
    document.body.style.removeProperty('overflow')
  }

  /**
   * Render dialog with show, title, description
   * @return {PureComponent} The dialog component
   */
  renderDialog = () => {
    const { show, title, description } = this.props
    if (show) {
      return (
        <Backdrop>
          <DialogComponent {...this.props} styleName="bounceIn xl-gutter borderRadius">
            <Screen>
              <Row styleName="h-center v-center">
                <Text styleName="bold">{title}</Text>
              </Row>
              <Row styleName="md-gutter-top h-center v-center">
                <Text styleName="medium">{description}</Text>
              </Row>
            </Screen>
          </DialogComponent>
        </Backdrop>
      )
    }
    return null
  }

  render() {
    return this.renderDialog()
  }
}

Dialog.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
}

Dialog.defaultProps = {
  show: false,
}

export default withTheme(Dialog)
