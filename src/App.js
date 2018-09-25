import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home, Donate, ThankYou } from './page'

const AppRouterConfig = [
  {
    Path: '/',
    Component: Home,
    Exact: true,
    Data: {
      header: 'Omise Tamboon React',
    },
  },
  {
    Path: '/donate/:topicId',
    Exact: false,
    Component: Donate,
  },
  {
    Path: '/thank-you',
    Exact: false,
    Component: ThankYou,
  },
]

class App extends PureComponent {
  /**
   * Create router
   * @return {Array<Route>} Array route for this component
   */
  createRouter = () => {
    return AppRouterConfig.map((routerConfig, index) => {
      const { Path, Component, Exact, Data } = routerConfig
      return <Route key={index} path={Path} exact={Exact} render={props => <Component {...props} {...Data} />} />
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
