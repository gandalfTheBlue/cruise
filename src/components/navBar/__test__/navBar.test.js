import React from 'react'
import renderer from 'react-test-renderer'

import NavBar from '../navBar'

it('renders correctly nav bar content', () => {
  const tree = renderer.create(<NavBar />).toJSON()
  expect(tree).toMatchSnapshot()
})
