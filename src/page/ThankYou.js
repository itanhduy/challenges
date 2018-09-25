import React, { PureComponent } from 'react'
import { Home } from '../page'
import { Screen, Row, Text } from '../component'

class ThankYou extends PureComponent {
  render() {
    return (
      <Screen>
        <Row styleName="lg-gutter-top flexible v-center">
          <Text styleName="bold heading">Thank you for donation</Text>
        </Row>
        <Home header="You may interested with these campaign" {...this.props} />
      </Screen>
    )
  }
}

export default ThankYou
