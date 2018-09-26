import React from 'react'
import { Backdrop, ProviderProvide } from '../component'
import renderer from 'react-test-renderer'

test('Should Render Backdrop Component', () => {
  const backdropComponent = renderer.create(
    <ProviderProvide>
      <Backdrop />
    </ProviderProvide>,
  )
  const tree = backdropComponent.toJSON()
  expect(tree).toMatchSnapshot()
})
