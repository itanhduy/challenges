import React from 'react'
import { Backdrop, ProviderProvide } from '../component'
import renderer from 'react-test-renderer'

test('Should render Backdrop component', () => {
  const backdropComponent = renderer.create(
    <ProviderProvide>
      <Backdrop />
    </ProviderProvide>,
  )
  const tree = backdropComponent.toJSON()
  expect(tree).toMatchSnapshot()
})
