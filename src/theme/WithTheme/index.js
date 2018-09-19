/**
 * This is a HOC for define default properties for all elements
 * Andy Ng
 * 2018-09-19 15:59:36
 */
import React, { PureComponent } from 'react'
import { forOwn } from 'lodash'
import FlexBox from '../FlexBox'

/**
 * List style supported
 * Check each file for more details
 */
const StyleSupported = [FlexBox]

const createStyleWithName = styleName => {
  if (styleName) {
    const styleObjects = {}
    forOwn(StyleSupported, item => {
      const key = Object.keys(item[styleName])
      styleObjects[key] = item[styleName][key]
    })
    return styleObjects
  }
  return
}

/**
 * Create wrapped component that able to use StyleName
 * @param {*} WrappedComponent The child component
 * @param {*} extraOptions The extra options from user
 */
const WithTheme = (WrappedComponent, extraOptions = {}) => {
  return class extends PureComponent {
    render() {
      const { style, styleName } = this.props
      return (
        <WrappedComponent
          {...this.props}
          {...extraOptions}
          style={Object.assign({}, style, createStyleWithName(styleName))}
        />
      )
    }
  }
}

export default WithTheme
