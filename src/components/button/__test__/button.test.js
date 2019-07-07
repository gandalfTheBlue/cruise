import React from 'react'
import renderer from 'react-test-renderer'

import Button from '../button'

it('renders correctly button theme default', () => {
  const tree = renderer.create(<Button theme='default' />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly button theme dark', () => {
  const tree = renderer.create(<Button theme='dark' />).toJSON()
  expect(tree).toMatchSnapshot()
})
