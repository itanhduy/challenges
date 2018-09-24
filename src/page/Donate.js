import React, { PureComponent } from 'react'
import { Screen } from '../component'

class Donate extends PureComponent {
  componentDidMount() {
    console.info(this.props.match.params.topicId)
  }
  render() {
    return <Screen />
  }
}

export default Donate
