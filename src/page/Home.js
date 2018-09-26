import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { sumBy, map, cloneDeep } from 'lodash'
import { Responsive } from '../theme'
import { ListCharities, Screen, Text, Row, Button } from '../component'
import { CharityAction, DonationAction } from '../redux/actions'
import { API } from '../service'

class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      charities: [],
      columns: 2,
      widthPercent: 75,
    }
  }

  async componentDidMount() {
    const charitiesResponse = await API.charities()
    const paymentsRespone = await API.payments()
    const newListCharities = this.mapPaymentAmount(charitiesResponse.data, paymentsRespone.data)
    const { updateTotalDonate } = this.props
    this.setState(
      {
        charities: newListCharities,
      },
      () => {
        const totalAmount = sumBy(paymentsRespone.data, item => item.amount)
        updateTotalDonate(totalAmount)
      },
    )
    Responsive.listen([
      {
        minWidth: 0,
        maxWidth: 425,
        inCase: () => {
          this.setState({
            columns: 1,
            widthPercent: 100,
          })
        },
      },
      {
        minWidth: 425,
        maxWidth: 1024,
        inCase: () => {
          this.setState({
            columns: 1,
            widthPercent: 75,
          })
        },
      },
      {
        minWidth: 1024,
        inCase: () => {
          this.setState({
            columns: 2,
          })
        },
      },
    ])
  }

  /**
   * Map totalAmount of charity with payments response
   * @param {Array} listCharities  The list charities
   * @param {Array} payments The list payments
   * @return {Array<Object>} New array of campaign with totalAmount
   */
  mapPaymentAmount = (listCharities, payments) => {
    const newListCharities = map(listCharities, item => {
      const totalAmount = sumBy(payments, payment => {
        return item.id === payment.charitiesId ? payment.amount : 0
      })
      item.totalAmount = totalAmount
      return item
    })
    return newListCharities
  }

  /**
   * When user click on Donate button, run this function
   * @param {Object} item The data of charity
   * @return {Function} Redirect user to donation page
   */
  startDonating = (event, item) => {
    const { history, selectedCampaign } = this.props
    selectedCampaign(item)
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

  /**
   * Return description component for card
   * @param callBackItem The item callback return from the parent component which is wrapping this rightComponent
   * @return {PureComponent} The component for description position
   */
  descriptionComponent = callBackItem => {
    return (
      <Text styleName="caption medium">{`Total raised: ${callBackItem.totalAmount} ${callBackItem.currency}`}</Text>
    )
  }

  render() {
    const { charities, columns, widthPercent } = this.state
    const { header } = this.props
    return (
      <Screen styleName="v-center">
        <Row styleName="xl-gutter-top">
          <Text styleName="title bold fadeIn">{header}</Text>
        </Row>
        <Row styleName={`vertical width-${widthPercent} xl-gutter-top`}>
          <ListCharities
            data={cloneDeep(charities)}
            columns={columns}
            rightComponent={this.rightComponent}
            descriptionComponent={this.descriptionComponent}
          />
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
    /**
     * Dispatch campaign that user is selecting to donate to store
     * @param {Object} campaign The campaign information
     */
    selectedCampaign: campaign => {
      dispatch(DonationAction.selectedCampaign(campaign))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
