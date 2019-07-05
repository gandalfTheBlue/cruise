import React from 'react'
import './header.less'
import logo from '../../assets/logo/logo.svg'
import avatar from '../../assets/avatar/yaoming_meme.svg'

const Avatar = () => {
  return (
    <div className='avatar'>
      <img src={avatar} alt='avatar' />
      <span className='iconfont icon-angle-down' />
    </div>
  )
}

const Header = () => {
  return (
    <div className='header'>
      <div className='content'>
        <img src={logo} alt='logo' />
        <Avatar />
      </div>
    </div>
  )
}

export default Header
