import React from 'react'
import { ListCharitiesMock } from '../mock'
import { ListCharities, ProviderProvide } from '../component'
import renderer from 'react-test-renderer'

test('Should render ListCharities component', () => {
  const listCharitiesComponent = renderer.create(
    <ProviderProvide>
      <ListCharities {...ListCharitiesMock} />
    </ProviderProvide>,
  )
  const tree = listCharitiesComponent.toJSON()
  expect(tree).toMatchSnapshot()
})
