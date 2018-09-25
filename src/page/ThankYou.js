import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Home } from '../page'
import { Screen, Row, Text } from '../component'

class ThankYou extends PureComponent {
  render() {
    const { donation } = this.props
    const { donationInformation, campainInformation } = donation.info
    console.info(donationInformation, campainInformation)
    return (
      <Screen>
        <Row styleName="lg-gutter-top flexible v-center">
          <Text styleName="bold heading">Thank you for donation</Text>
        </Row>
        <Home header="You may interested with these campaigns" {...this.props} />
      </Screen>
    )
  }
}

function mapStateToProps(state) {
  return {
    donation: state.donation,
  }
}

export default connect(mapStateToProps)(ThankYou)
