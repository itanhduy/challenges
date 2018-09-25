import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import Screen from '../Screen'
import Text from '../Text'
import Button from '../Button'
import Row from '../Row'
import styled from 'styled-components'

const NothingComponent = styled.div`
  ${props => {
    return {
      background: `url(/images/nothing.jpg)`,
      backgroundSize: 'cover',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }
  }};
`

class Nothing extends PureComponent {
  goBackHome = () => {
    const { history } = this.props
    history.push('/')
  }

  render() {
    return (
      <NothingComponent>
        <Screen styleName="vertical v-center h-center fullHeight">
          <Text styleName="heading bold">Sorry. We got lost!</Text>
          <Text styleName="title medium">Nothing here</Text>
          <Row styleName="lg-gutter-top unflexible">
            <Button textProps={{ styleName: 'textPrimaryColor medium' }} onClick={this.goBackHome}>
              Go Back Home
            </Button>
          </Row>
        </Screen>
      </NothingComponent>
    )
  }
}

export default withRouter(Nothing)
