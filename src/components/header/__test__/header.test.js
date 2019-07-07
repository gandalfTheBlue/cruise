import React from 'react'
import renderer from 'react-test-renderer'

import Header from '../header'

it('renders correctly header content', () => {
  const tree = renderer.create(<Header />).toJSON()
  expect(tree).toMatchSnapshot()
})
