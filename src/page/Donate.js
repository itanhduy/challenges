import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { sumBy } from 'lodash'
import { Responsive } from '../theme'
import { Screen, Row, Text, Card, Divider, PaymentOptions, Button, Dialog, GoBackHome } from '../component'
import { DonationAction } from '../redux/actions'
import { API, Transform } from '../service'
import { PaymentOptionsData } from '../static'
import { DialogType, CreateDialogOptions } from '../type'

class Donate extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      campaignInformation: {},
      paymentOptions: [],
      paymentOptionSelected: null,
      paymentData: null,
      dialogOptions: CreateDialogOptions(false, DialogType.ERROR),
      widthPercent: 50,
    }
  }

  async componentDidMount() {
    /**
     * Get the topicId from the url
     */
    const { topicId } = this.props.match.params
    const campaignInformationResponse = await API.getCharity(topicId)
    const paymentDataResponse = await API.getPayments(topicId)

    this.setState({
      campaignInformation: campaignInformationResponse.data,
      paymentData: paymentDataResponse.data,
      paymentOptions: PaymentOptionsData(campaignInformationResponse.data.currency),
    })
    Responsive.listen([
      {
        minWidth: 0,
        maxWidth: 425,
        inCase: () => {
          this.setState({
            widthPercent: 100,
          })
        },
      },
      {
        minWidth: 425,
        maxWidth: 1024,
        inCase: () => {
          this.setState({
            widthPercent: 50,
          })
        },
      },
      {
        minWidth: 1024,
        inCase: () => {
          this.setState({
            widthPercent: 50,
          })
        },
      },
      {
        minWidth: 1440,
        inCase: () => {
          this.setState({
            widthPercent: 30,
          })
        },
      },
    ]).start()
  }

  /**
   * Render right component for card to show totalAmount
   * For this charity
   * @return {Text} The text component with totalAmount
   */
  rightComponent = () => {
    const { paymentData, campaignInformation } = this.state
    if (paymentData) {
      const { currency } = campaignInformation
      const totalAmount = sumBy(paymentData, payment => payment.amount)
      return (
        <Row styleName="h-end">
          <Text styleName="sm-gutter-right">Total raised:</Text>
          <Text formatMoney={true} currency={currency}>
            {totalAmount}
          </Text>
        </Row>
      )
    }
    return null
  }

  /**
   * The function that will be called
   * When user changed payment option
   * @param item The item information of payment option
   */
  optionChange = paymentOptionSelected => {
    this.setState({ paymentOptionSelected })
  }

  /**
   * After user selected payment option
   * Show result so user can know which option they have selected
   * @return {PureComponent} The componen that included option payment result
   */
  renderOptionSelected = () => {
    const { paymentOptionSelected } = this.state
    const content = paymentOptionSelected
      ? `You are gonna donate ${paymentOptionSelected.label}`
      : `Please choose at least one option`
    return <Text styleName="medium">{content}</Text>
  }

  /**
   * Make a new donation
   * Check if user didn't select payment option then show dialog error
   * @return {Void} New option will be added to database and redirect user to thank you screen
   */
  donate = () => {
    const { paymentOptionSelected, campaignInformation } = this.state
    const { addNewDonation, history } = this.props
    if (paymentOptionSelected) {
      const { item } = paymentOptionSelected
      API.makeNewPayment(campaignInformation.id, item.amount, item.currency)
        .then(response => {
          addNewDonation({
            donationInformation: response.data,
            campaignInformation: campaignInformation,
          })
          history.push(`/thank-you/${response.data.id}`)
        })
        .catch(error => {
          this.setState({
            dialogOptions: CreateDialogOptions(
              true,
              DialogType.ERROR,
              'Oops! Something went wrong?',
              `We can't make a new payment. Please try again later`,
            ),
          })
        })
    } else {
      this.setState({
        dialogOptions: CreateDialogOptions(
          true,
          DialogType.ERROR,
          'Oops! Something went wrong?',
          'Please choose at least one payment option',
        ),
      })
    }
  }

  /**
   * On click close button
   * @return {Void} Close dialog
   */
  onClickClose = () => {
    this.setState({ dialogOptions: CreateDialogOptions(false) })
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
              onChange={this.optionChange}
            />
          </Row>
        </Row>
        <Row styleName="md-gutter-top">
          <Divider />
        </Row>
        <Row styleName="md-gutter-top">{this.renderOptionSelected()}</Row>
        <Row styleName="md-gutter-top space-between">
          <Button styleName="width-45" textProps={{ styleName: 'textPrimaryColor medium' }} onClick={this.donate}>
            Donate
          </Button>
          <GoBackHome styleName="width-45" />
        </Row>
      </Row>
    )
  }

  renderView = () => {
    const { campaignInformation, dialogOptions, widthPercent } = this.state
    const { show, title, type, description } = dialogOptions
    return (
      <Screen styleName="v-center">
        <Row styleName="xl-gutter-top">
          <Text styleName="bold title text-center width-100 fadeIn">Donation for {campaignInformation.name}</Text>
        </Row>
        <Row styleName={`xl-gutter-top width-${widthPercent}`}>
          <Card
            data={campaignInformation}
            columns={1}
            rightComponent={this.rightComponent}
            bottomComponent={this.bottomComponent}
            cardContentProps={{ paddingBottom: 0 }}
          />
        </Row>
        <Dialog
          type={type}
          title={title}
          description={description}
          show={show}
          onClickClose={this.onClickClose}
          showOKButton={false}
        />
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

function mapDispatchToProps(dispatch) {
  return {
    /**
     * Store new donation
     * Will show it in ThankYou screen
     */
    addNewDonation: info => {
      dispatch(DonationAction.addNewDonation(info))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Donate)
