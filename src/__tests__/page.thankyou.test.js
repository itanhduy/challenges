import React from 'react'
import { ThankYouMock } from '../mock'
import { ProviderProvide } from '../component'
import { ThankYou } from '../page'
import renderer from 'react-test-renderer'

test('Should Render ThankYou Component', () => {
  const thankYouComponent = renderer.create(
    <ProviderProvide>
      <ThankYou {...ThankYouMock} />
    </ProviderProvide>,
  )
  const tree = thankYouComponent.toJSON()
  expect(tree).toMatchSnapshot()
})
