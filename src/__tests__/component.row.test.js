import React from 'react'
import { Row, ProviderProvide } from '../component'
import renderer from 'react-test-renderer'

test('Should render Row component', () => {
  const rowComponent = renderer.create(
    <ProviderProvide>
      <Row />
    </ProviderProvide>,
  )
  const tree = rowComponent.toJSON()
  expect(tree).toMatchSnapshot()
})
