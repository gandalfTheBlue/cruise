import React, { useState, useRef } from 'react'
import './header.less'
import { useClickOutside } from '../../customHooks/useClickOutside'

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
  const wrapperRef = useRef(null)
  const hideOptions = () => setShowOptions(false)
  useClickOutside(wrapperRef, hideOptions)
  return (
    <div ref={wrapperRef}>
      <div
        className='header-avatar'
        onClick={() => setShowOptions(!showOptions)}
      >
        <img src='/assets/avatar/yaoming_meme.svg' alt='avatar' />
        <span className='iconfont icon-angle-down' />
      </div>
      <ul className='user-option'>
        {showOptions &&
          userOptions.map(option => (
            <li className='user-option-item' key={option.name}>
              <span className={`iconfont ${option.icon}`} />
              <span className='item-label'>{option.name}</span>
            </li>
          ))}
      </ul>
    </div>
  )
}

const Header = () => (
  <div className='header'>
    <div className='header-container'>
      <div />
      <img src='/assets/logo/logo.svg' alt='logo' />
      <Avatar />
    </div>
  </div>
)

export default Header
