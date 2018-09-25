import React, { PureComponent } from 'react'
import Button from '../Button'
import { withRouter } from 'react-router-dom'

class GoBackHome extends PureComponent {
  goBackHome = () => {
    const { history } = this.props
    history.push('/')
  }

  render() {
    return (
      <Button textProps={{ styleName: 'textPrimaryColor medium' }} onClick={this.goBackHome} {...this.props}>
        Go Back Home
      </Button>
    )
  }
}

export default withRouter(GoBackHome)
