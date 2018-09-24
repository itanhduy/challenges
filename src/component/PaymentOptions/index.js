import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import validate from 'validate.js'
import Row from '../Row'
import Text from '../Text'

const InputRadioComponent = styled.input``

class PaymentOptions extends PureComponent {
  /**
   * When radio change
   * @param {HTMLElement} event The event of radio element
   * @param {Object} item The item information
   */
  onRadioChange = (event, item) => {
    const { onChange } = this.props
    if (onChange) onChange(item)
  }

  /**
   * Check groupName
   */
  checkGroupName = () => {
    const { isGroup, groupName } = this.props

    if (isGroup && validate.isEmpty(groupName)) {
      console.warn('The isGroup is true. But groupName is not there. Please check again')
      return null
    }
  }

  /**
   * Create list options component
   * @param data The list data
   * @return {Array<PureComponent>} The list options component
   */
  renderOptions = () => {
    const { data, isGroup, groupName } = this.props

    /**
     * Check groupname
     * If isGroup is true, but groupName is not there
     * Will return null
     */
    this.checkGroupName()

    return data.map((item, index) => {
      const { value, label } = item
      const name = isGroup ? groupName : index
      return (
        <Row key={index} styleName="md-gutter-top">
          <InputRadioComponent
            name={name}
            value={value}
            type="radio"
            onChange={event => this.onRadioChange(event, item)}
          />
          <Text styleName="sm-gutter-left medium">{label}</Text>
        </Row>
      )
    })
  }

  render() {
    return this.renderOptions()
  }
}

PaymentOptions.propTypes = {
  onChange: PropTypes.func,
  data: PropTypes.any,
  isGroup: PropTypes.bool,
  groupName: PropTypes.string,
}

PaymentOptions.defaultProps = {
  isGroup: false,
  groupName: String(),
}

export default PaymentOptions
