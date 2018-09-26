import React from 'react'
import { PaymentOptionsData } from '../static'
import { Transform } from '../service'
import { PaymentOptions, ProviderProvide } from '../component'
import renderer from 'react-test-renderer'

test('Should Render PaymentOptions Component', () => {
  const paymentOptionsComponent = renderer.create(
    <ProviderProvide>
      <PaymentOptions
        data={Transform.createOptionData(PaymentOptionsData(), 'amount', ['amount', 'currency'])}
        isGroup={true}
        groupName="payment-options"
      />
    </ProviderProvide>,
  )
  const tree = paymentOptionsComponent.toJSON()
  expect(tree).toMatchSnapshot()
})
