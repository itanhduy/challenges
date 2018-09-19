import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { sumBy } from 'lodash'
import { CharityAction } from './redux/actions'
import { API } from './service'

const Card = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
`

class App extends Component {
  constructor(props) {
    super()
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

  render() {
    return null
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
