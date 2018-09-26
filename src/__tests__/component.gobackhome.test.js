import React from 'react'
import { GoBackHome, ProviderProvide } from '../component'
import renderer from 'react-test-renderer'

test('Should render GoBackHome component', () => {
  const goBackHomeComponent = renderer.create(
    <ProviderProvide>
      <GoBackHome />
    </ProviderProvide>,
  )
  const tree = goBackHomeComponent.toJSON()
  expect(tree).toMatchSnapshot()
})
