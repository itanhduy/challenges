import React from 'react'
import { Image, ProviderProvide } from '../component'
import renderer from 'react-test-renderer'

test('Should render Image component', () => {
  const imageComponent = renderer.create(
    <ProviderProvide>
      <Image url="/images/baan-kru-noi.jpg" height={200} />
    </ProviderProvide>,
  )
  const tree = imageComponent.toJSON()
  expect(tree).toMatchSnapshot()
})
