import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Home } from '../page'
import { Screen, Row, Divider, Text, Nothing } from '../component'

class ThankYou extends PureComponent {
  /**
   * Check if we don't have enough information
   * Then show Nothing component, otherwise show ThankYou content
   * @return {PureComponent} Nothing component or ThankYou component
   */
  renderView = () => {
    const { donation } = this.props
    const { donationInformation, campainInformation } = donation.info
    if (!donationInformation && !campainInformation) {
      return <Nothing />
    }
    return (
      <Screen>
        <Row styleName="lg-gutter-top flexible v-center">
          <Text styleName="bold heading">{`Thank you for donation ${donationInformation.amount} ${
            donationInformation.currency
          } on campain ${campainInformation.name}`}</Text>
        </Row>
        <Row styleName="lg-gutter-top">
          <Divider />
        </Row>
        <Home header="You may interested with these campaigns" {...this.props} />
      </Screen>
    )
  }

  render() {
    return this.renderView()
  }
}

function mapStateToProps(state) {
  return {
    donation: state.donation,
  }
}

export default connect(mapStateToProps)(ThankYou)
