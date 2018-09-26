import React from 'react'
import { Row, ProviderProvide } from '../component'
import renderer from 'react-test-renderer'

test('Should Render Row Component', () => {
  const rowComponent = renderer.create(
    <ProviderProvide>
      <Row />
    </ProviderProvide>,
  )
  const tree = rowComponent.toJSON()
  expect(tree).toMatchSnapshot()
})
