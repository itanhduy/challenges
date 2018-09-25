import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { sumBy } from 'lodash'
import { ListCharities, Screen, Text, Row, Button } from '../component'
import { CharityAction } from '../redux/actions'
import { API } from '../service'

class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      charities: [],
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
        textProps={{ styleName: 'textPrimaryColor medium' }}
        onClick={event => this.startDonating(event, callBackItem)}>
        Donate
      </Button>
    )
  }

  render() {
    const { charities } = this.state
    const { header } = this.props
    return (
      <Screen styleName="h-center xl-gutter">
        <Row styleName="xl-gutter-top">
          <Text styleName="title bold fadeIn">{header}</Text>
        </Row>
        <Row styleName="vertical width-50 xl-gutter">
          <ListCharities data={charities} columns={2} rightComponent={this.rightComponent} />
        </Row>
      </Screen>
    )
  }
}

Home.propTypes = {
  header: PropTypes.string.isRequired,
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
)(Home)

// function handlePay(id, amount, currency) {
//   const self = this
//   return function() {
//     fetch('http://localhost:3001/payments', {
//       method: 'POST',
//       body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`,
//     })
//       .then(function(resp) {
//         return resp.json()
//       })
//       .then(function() {
//         self.props.dispatch({
//           type: 'UPDATE_TOTAL_DONATE',
//           amount,
//         })
//         self.props.dispatch({
//           type: 'UPDATE_MESSAGE',
//           message: `Thanks for donate ${amount}!`,
//         })

//         setTimeout(function() {
//           self.props.dispatch({
//             type: 'UPDATE_MESSAGE',
//             message: '',
//           })
//         }, 2000)
//       })
//   }
// }
