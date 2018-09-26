import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { DonateMock } from '../mock'
import { ProviderProvide } from '../component'
import { Donate } from '../page'
import renderer from 'react-test-renderer'

test('Should render Donate component', () => {
  const donateComponent = renderer.create(
    <ProviderProvide>
      <BrowserRouter>
        <Donate {...DonateMock} />
      </BrowserRouter>
    </ProviderProvide>,
  )
  const tree = donateComponent.toJSON()
  expect(tree).toMatchSnapshot()
})
