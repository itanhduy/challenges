import React from 'react'
import { Nothing, ProviderProvide } from '../component'
import renderer from 'react-test-renderer'

test('Should Render Nothing Component', () => {
  const nothingComponent = renderer.create(
    <ProviderProvide>
      <Nothing />
    </ProviderProvide>,
  )
  const tree = nothingComponent.toJSON()
  expect(tree).toMatchSnapshot()
})
