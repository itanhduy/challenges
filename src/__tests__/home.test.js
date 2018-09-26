import React from 'react'
import Store from '../store'
import { Provider } from 'react-redux'
import { Home } from '../page'
import renderer from 'react-test-renderer'

test('Should render Home component', () => {
  const homeComponent = renderer.create(
    <Provider store={Store}>
      <Home header="Omise Tamboon React" />
    </Provider>,
  )
  const tree = homeComponent.toJSON()
  console.info(tree)
  expect(tree).toMatchSnapshot()
})
