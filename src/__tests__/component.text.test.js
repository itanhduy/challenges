import React from 'react'
import { Text, ProviderProvide } from '../component'
import renderer from 'react-test-renderer'

test('Should render Text component', () => {
  const textComponent = renderer.create(
    <ProviderProvide>
      <Text>I'm Andy Ng</Text>
    </ProviderProvide>,
  )
  const tree = textComponent.toJSON()
  expect(tree).toMatchSnapshot()
})
