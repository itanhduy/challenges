import React from 'react'
import { CardMock } from '../mock'
import { Card, ProviderProvide } from '../component'
import renderer from 'react-test-renderer'

test('Should render Card component', () => {
  const cardComponent = renderer.create(
    <ProviderProvide>
      <Card {...CardMock} />
    </ProviderProvide>,
  )
  const tree = cardComponent.toJSON()
  expect(tree).toMatchSnapshot()
})
