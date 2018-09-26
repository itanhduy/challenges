import React from 'react'
import { DonateMock } from '../mock'
import { ProviderProvide } from '../component'
import { Donate } from '../page'
import renderer from 'react-test-renderer'

test('Should render Donate component', () => {
  const donateComponent = renderer.create(
    <ProviderProvide>
      <Donate {...DonateMock} />
    </ProviderProvide>,
  )
  const tree = donateComponent.toJSON()
  expect(tree).toMatchSnapshot()
})
