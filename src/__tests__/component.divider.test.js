import React from 'react'
import { Divider, ProviderProvide } from '../component'
import renderer from 'react-test-renderer'

test('Should Render Divider Component', () => {
  const dividerComponent = renderer.create(
    <ProviderProvide>
      <Divider />
    </ProviderProvide>,
  )
  const tree = dividerComponent.toJSON()
  expect(tree).toMatchSnapshot()
})
