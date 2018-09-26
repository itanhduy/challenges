import React, { PureComponent } from 'react'
import { Home } from '../page'
import { API } from '../service'
import { Screen, Row, Divider, Text, Nothing, GoBackHome } from '../component'

class ThankYou extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      paymentInformation: {},
      charityInformation: {},
    }
  }

  async componentDidMount() {
    const { paymentId } = this.props.match.params
    const paymentResponse = await API.payment(paymentId)
    const charityInformationResponse = await API.getCharity(paymentResponse.data.charitiesId)
    this.setState({
      paymentInformation: paymentResponse.data,
      charityInformation: charityInformationResponse.data,
    })
  }

  /**
   * Check if we don't have enough information
   * Then show Nothing component, otherwise show ThankYou content
   * @return {PureComponent} Nothing component or ThankYou component
   */
  renderView = () => {
    const { charityInformation, paymentInformation } = this.state
    return (
      <Screen>
        <Row styleName="lg-gutter-top">
          <Text styleName="bold heading text-center width-100">{`Thank you for donation ${paymentInformation.amount} ${
            paymentInformation.currency
          } on campaign ${charityInformation.name}`}</Text>
        </Row>
        <Row styleName="lg-gutter-top">
          <Divider />
        </Row>
        <Home header="You may be interested in these campaigns" {...this.props} />

        <Row styleName="lg-gutter flexible h-center">
          <GoBackHome styleName="width-30" />
        </Row>
      </Screen>
    )
  }

  render() {
    return this.renderView()
  }
}

export default ThankYou
