import React from 'react'
import { Screen, ProviderProvide } from '../component'
import renderer from 'react-test-renderer'

test('Should Render Screen Component', () => {
  const screenComponent = renderer.create(
    <ProviderProvide>
      <Screen />
    </ProviderProvide>,
  )
  const tree = screenComponent.toJSON()
  expect(tree).toMatchSnapshot()
})
