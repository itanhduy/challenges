import React from 'react'
import { GoBackHome, ProviderProvide } from '../component'
import renderer from 'react-test-renderer'

test('Should Render GoBackHome Component', () => {
  const goBackHomeComponent = renderer.create(
    <ProviderProvide>
      <GoBackHome />
    </ProviderProvide>,
  )
  const tree = goBackHomeComponent.toJSON()
  expect(tree).toMatchSnapshot()
})
