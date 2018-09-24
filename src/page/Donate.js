import React, { PureComponent } from 'react'
import { Screen, Row, Tex, Card } from '../component'
import { API } from '../service'

class Donate extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      charityInformation: {},
      paymentOptions: {},
      isFetchingData: true,
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
          isFetchingData: false,
        })
      },
    )
  }

  renderView = () => {
    const { charityInformation, paymentOptions, isFetchingData } = this.state
    return (
      <Screen styleName="h-center xl-gutter">
        <Row styleName="xl-gutter-top width-30">
          <Card data={charityInformation} columns={1} />
        </Row>
      </Screen>
    )
  }

  render() {
    return this.renderView()
  }
}

export default Donate
