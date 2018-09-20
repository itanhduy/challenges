import '@babel/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import Theme from './theme'
import Store from './store'
import App from './App'

console.info('Theme', Theme)

render(
  <Provider store={Store}>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
)
