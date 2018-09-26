import React from 'react'
import { Dialog, ProviderProvide } from '../component'
import renderer from 'react-test-renderer'

test('Should render Dialog component', () => {
  const dialogComponent = renderer.create(
    <ProviderProvide>
      <Dialog />
    </ProviderProvide>,
  )
  const tree = dialogComponent.toJSON()
  expect(tree).toMatchSnapshot()
})
