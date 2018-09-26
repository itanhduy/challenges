import React from 'react'
import { ListCharitiesMock } from '../mock'
import { ListCharities, ProviderProvide } from '../component'
import renderer from 'react-test-renderer'

test('Should Render ListCharities Component', () => {
  const listCharitiesComponent = renderer.create(
    <ProviderProvide>
      <ListCharities {...ListCharitiesMock} />
    </ProviderProvide>,
  )
  const tree = listCharitiesComponent.toJSON()
  expect(tree).toMatchSnapshot()
})
