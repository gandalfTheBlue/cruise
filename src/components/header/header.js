import React from 'react'
import './header.less'
import logo from '../../logo.svg'

const Header = () => {
  return (
    <div className='header'>
      <div className='content'>
        <img src={logo} alt='logo' />
      </div>
    </div>
  )
}

export default Header
