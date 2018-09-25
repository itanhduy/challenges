import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import Backdrop from '../Backdrop'
import Screen from '../Screen'
import Row from '../Row'
import Text from '../Text'
import Button from '../Button'

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
   * Render button at the bottom
   */
  renderButtons = () => {
    const { onClickOK, onClickClose, showOKButton, showCloseButton } = this.props
    let rowWrapperStyleName = 'xl-gutter-top flexible v-center h-center'

    if (showOKButton && showCloseButton) {
      rowWrapperStyleName += ' space-between'
    }

    return (
      <Row styleName={rowWrapperStyleName}>
        {showOKButton && (
          <Button styleName="width-45" textProps={{ styleName: 'textPrimary medium' }} onClick={onClickOK}>
            OK
          </Button>
        )}
        {showCloseButton && (
          <Button styleName="width-45" textProps={{ styleName: 'textPrimary medium' }} onClick={onClickClose}>
            Close
          </Button>
        )}
      </Row>
    )
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
              {this.renderButtons()}
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
  onClickOK: PropTypes.func,
  onClickClose: PropTypes.func,
  showOKButton: PropTypes.bool,
  showCloseButton: PropTypes.bool,
}

Dialog.defaultProps = {
  onClickOK: () => {},
  onClickClose: () => {},
  showOKButton: true,
  showCloseButton: true,
  show: false,
}

export default withTheme(Dialog)
