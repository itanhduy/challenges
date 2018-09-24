import React, { PureComponent } from 'react'
import { Screen, Row, Text, Card, Divider, PaymentOptions } from '../component'
import { API, Transform } from '../service'

class Donate extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      charityInformation: {},
      paymentOptions: {},
    }
  }

  componentDidMount() {
    /**
     * Get the topicId from the url
     */
    const { topicId } = this.props.match.params
    /**
     * Start fetching all information
     * First response will be charity information
     * Second response will be payment options for this charity
     */
    Promise.all([API.getCharity(topicId), API.getPayments(topicId)]).then(
      ([charityInfoResponse, paymentOptionsResponse]) => {
        this.setState({
          charityInformation: charityInfoResponse.data,
          paymentOptions: paymentOptionsResponse.data,
        })
      },
    )
  }

  /**
   * Render right component for card to show totalAmount
   * For this charity
   * @return {Text} The text component with totalAmount
   */
  rightComponent = () => {
    const { charityInformation } = this.state
    const { totalAmount, currency } = charityInformation
    return (
      <Text formatMoney={true} currency={currency}>
        {totalAmount}
      </Text>
    )
  }

  /**
   * Render bottom component for this charity
   * @return {PureComponent} The bottom component that included payment options and navigation
   */
  bottomComponent = () => {
    const { paymentOptions } = this.state
    return (
      <Row styleName="vertical">
        <Divider />
        <Row styleName="vertical md-gutter-top">
          <Text styleName="medium">Payment options</Text>
          <Row styleName="md-gutter-top vertical">
            <PaymentOptions
              data={Transform.createOptionData(paymentOptions, 'amount', ['amount', 'currency'])}
              isGroup={true}
              groupName="payment-options"
            />
          </Row>
        </Row>
      </Row>
    )
  }

  renderView = () => {
    const { charityInformation } = this.state
    return (
      <Screen styleName="h-center xl-gutter">
        <Row styleName="xl-gutter-top">
          <Text styleName="title bold fadeIn">Donation for {charityInformation.name}</Text>
        </Row>
        <Row styleName="xl-gutter-top width-30">
          <Card
            data={charityInformation}
            columns={1}
            rightComponent={this.rightComponent}
            bottomComponent={this.bottomComponent}
            cardContentProps={{ paddingBottom: 0 }}
          />
        </Row>
      </Screen>
    )
  }

  render() {
    return this.renderView()
  }
}

export default Donate
