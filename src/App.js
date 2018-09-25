import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './page/Home'
import Donate from './page/Donate'

const AppRouterConfig = [
  {
    Path: '/',
    Component: Home,
    Data: {
      header: 'Omise Tamboon React',
    },
  },
  {
    Path: '/donate/:topicId',
    Component: Donate,
  },
]

class App extends PureComponent {
  /**
   * Create router
   * @return {Array<Route>} Array route for this component
   */
  createRouter = () => {
    return AppRouterConfig.map((routerConfig, index) => {
      const { Path, Component, Data } = routerConfig
      return <Route key={index} path={Path} render={() => <Component {...Data} />} />
    })
  }

  render() {
    return (
      <Router>
        <div>{this.createRouter()}</div>
      </Router>
    )
  }
}

export default App
