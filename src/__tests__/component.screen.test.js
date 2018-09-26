import React from 'react'
import { Screen, ProviderProvide } from '../component'
import renderer from 'react-test-renderer'

test('Should render Screen component', () => {
  const screenComponent = renderer.create(
    <ProviderProvide>
      <Screen />
    </ProviderProvide>,
  )
  const tree = screenComponent.toJSON()
  expect(tree).toMatchSnapshot()
})
