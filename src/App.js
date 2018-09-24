import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './page/Home'
import Donate from './page/Donate'

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/donate/:topicId" component={Donate} />
    </div>
  </Router>
)

export default App
