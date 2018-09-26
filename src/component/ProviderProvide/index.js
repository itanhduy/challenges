import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import Store from '../../store'
import Theme from '../../theme'

/**
 * This component for wrapping test component with Redux store, Theme provider and etc...
 */
class ProviderProvide extends PureComponent {
  render() {
    const { children } = this.props
    return (
      <Provider store={Store}>
        <ThemeProvider theme={Theme}>
          <BrowserRouter>{children}</BrowserRouter>
        </ThemeProvider>
      </Provider>
    )
  }
}

ProviderProvide.propTypes = {
  children: PropTypes.any.isRequired,
}

export default ProviderProvide
