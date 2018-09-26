import React from 'react'
import { ProviderProvide } from '../component'
import { Home } from '../page'
import renderer from 'react-test-renderer'

test('Should render Home component', () => {
  const homeComponent = renderer.create(
    <ProviderProvide>
      <Home header="Omise Tamboon React" />
    </ProviderProvide>,
  )
  const tree = homeComponent.toJSON()
  expect(tree).toMatchSnapshot()
})
