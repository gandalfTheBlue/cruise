import React, { useState } from 'react'
import './header.less'
import logo from '../../assets/logo/logo.svg'
import avatar from '../../assets/avatar/yaoming_meme.svg'

const userOptions = [
  {
    name: 'Profile',
    icon: 'icon-id-card'
  },
  {
    name: 'Sign Out',
    icon: 'icon-sign-in'
  }
]

const Avatar = () => {
  const [showOptions, setShowOptions] = useState(false)
  return (
    <div>
      <div className='avatar' onClick={() => setShowOptions(!showOptions)}>
        <img src={avatar} alt='avatar' />
        <span className='iconfont icon-angle-down' />
      </div>
      <ul className='user-option'>
        {showOptions &&
          userOptions.map(option => (
            <li className='user-menu-item' key={option.name}>
              <span className={`iconfont ${option.icon}`} />
              <span className='menu-label'>{option.name}</span>
            </li>
          ))}
      </ul>
    </div>
  )
}

const Header = () => {
  return (
    <div className='header'>
      <div className='content'>
        <div />
        <img src={logo} alt='logo' />
        <Avatar />
      </div>
    </div>
  )
}

export default Header
