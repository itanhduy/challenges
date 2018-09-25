import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { MdError, MdCheckCircle, MdInfo } from 'react-icons/md'
import styled, { withTheme } from 'styled-components'
import Backdrop from '../Backdrop'
import Screen from '../Screen'
import Row from '../Row'
import Text from '../Text'
import Button from '../Button'
import { DialogType } from '../../type'

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
          <Button styleName="width-45" textProps={{ styleName: 'textPrimaryColor medium' }} onClick={onClickOK}>
            OK
          </Button>
        )}
        {showCloseButton && (
          <Button styleName="width-45" textProps={{ styleName: 'textPrimaryColor medium' }} onClick={onClickClose}>
            Close
          </Button>
        )}
      </Row>
    )
  }

  /**
   * Render header depends on type of dialog
   * We have 3 types as now: Error, Success and Info
   * Each type will have different color and icon
   * @return {Row} The row component with icon and title inside
   */
  renderHeader = () => {
    const { title, type, theme } = this.props
    const { color } = theme
    let DialogIcon = MdError
    let BackgroundClassColor = 'backgroundError'

    /**
     * Detect icon for type
     */
    switch (type) {
      case DialogType.SUCCESS:
        DialogIcon = MdCheckCircle
        BackgroundClassColor = 'backgroundSuccess'
        break
      case DialogType.INFO:
        DialogIcon = MdInfo
        BackgroundClassColor = 'backgroundInfo'
        break
      default:
        DialogIcon = MdError
        BackgroundClassColor = 'backgroundError'
    }

    return (
      <Row styleName={`h-center v-center flexible lg-gutter ${BackgroundClassColor}`}>
        <DialogIcon size={30} color={color.white} />
        <Text styleName="bold md-gutter-left textWhiteColor">{title}</Text>
      </Row>
    )
  }

  /**
   * Render dialog with show, title, description
   * @return {PureComponent} The dialog component
   */
  renderDialog = () => {
    const { show, description } = this.props
    if (show) {
      return (
        <Backdrop>
          <DialogComponent {...this.props} styleName="bounceIn borderRadius overflowHidden">
            {this.renderHeader()}
            <Screen styleName="lg-gutter">
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
