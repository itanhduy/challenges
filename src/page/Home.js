import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sumBy } from 'lodash'
import { ListCharities, Screen, Text, Row, Button } from '../component'
import { CharityAction } from '../redux/actions'
import { API } from '../service'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      charities: [],
      selectedAmount: 10,
    }
  }

  async componentDidMount() {
    const charitiesResponse = await API.charities()
    const paymentsRespone = await API.payments()
    const { updateTotalDonate } = this.props
    this.setState({ charities: charitiesResponse.data }, () => {
      const totalAmount = sumBy(paymentsRespone.data, item => item.amount)
      updateTotalDonate(totalAmount)
    })
  }

  /**
   * When user click on Donate button, run this function
   * @param {Object} item The data of charity
   * @return {Function} Redirect user to donation page
   */
  startDonating = (event, item) => {
    const { history } = this.props
    history.push(`donate/${item.id}`)
  }

  /**
   * Return right component for card
   * @param callBackItem The item callback return from the parent component which is wrapping this rightComponent
   * @return {Button} The button element for right position
   */
  rightComponent = callBackItem => {
    return (
      <Button
        textProps={{ styleName: 'textPrimary medium' }}
        onClick={event => this.startDonating(event, callBackItem)}>
        Donate
      </Button>
    )
  }

  render() {
    const { charities } = this.state
    return (
      <Screen styleName="h-center xl-gutter">
        <Row styleName="xl-gutter-top">
          <Text styleName="title bold fadeIn">Omise Tamboon React</Text>
        </Row>
        <Row styleName="vertical width-50 xl-gutter">
          <ListCharities data={charities} columns={2} rightComponent={this.rightComponent} />
        </Row>
      </Screen>
    )
    //   const self = this
    //   const cards = this.state.charities.map(function(item, i) {
    //     const payments = [10, 20, 50, 100, 500].map((amount, j) => (
    //       <label key={j}>
    //         <input
    //           type="radio"
    //           name="payment"
    //           onClick={function() {
    //             self.setState({ selectedAmount: amount })
    //           }}
    //         />{' '}
    //         {amount}
    //       </label>
    //     ))
    //     return (
    //       <Card key={i}>
    //         <p>{item.name}</p>
    //         {payments}
    //         <button onClick={handlePay.call(self, item.id, self.state.selectedAmount, item.currency)}>Pay</button>
    //       </Card>
    //     )
    //   })
    //   const style = {
    //     color: 'red',
    //     margin: '1em 0',
    //     fontWeight: 'bold',
    //     fontSize: '16px',
    //     textAlign: 'center',
    //   }
    //   const donate = this.props.donate
    //   const message = this.props.message
    //   return (
    //     <div>
    //       <h1>Tamboon React</h1>
    //       <p>All donations: {donate}</p>
    //       <p style={style}>{message}</p>
    //       {cards}
    //     </div>
    //   )
  }
}

function mapStateToProps(state) {
  return {
    charity: state.charity,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    /**
     * Dispatch total donate to store
     * @param {Number} total The total amount
     */
    updateTotalDonate: total => {
      dispatch(CharityAction.updateTotalDonate(total))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)

function handlePay(id, amount, currency) {
  const self = this
  return function() {
    fetch('http://localhost:3001/payments', {
      method: 'POST',
      body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`,
    })
      .then(function(resp) {
        return resp.json()
      })
      .then(function() {
        self.props.dispatch({
          type: 'UPDATE_TOTAL_DONATE',
          amount,
        })
        self.props.dispatch({
          type: 'UPDATE_MESSAGE',
          message: `Thanks for donate ${amount}!`,
        })

        setTimeout(function() {
          self.props.dispatch({
            type: 'UPDATE_MESSAGE',
            message: '',
          })
        }, 2000)
      })
  }
}
