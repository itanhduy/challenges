import React from 'react'
import { Button, ProviderProvide } from '../component'
import renderer from 'react-test-renderer'

test('Should render Button component', () => {
  const buttonComponent = renderer.create(
    <ProviderProvide>
      <Button>I'm Andy Ng</Button>
    </ProviderProvide>,
  )
  const tree = buttonComponent.toJSON()
  expect(tree).toMatchSnapshot()
})
