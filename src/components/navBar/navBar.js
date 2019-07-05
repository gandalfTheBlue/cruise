import React from 'react'
import { Link } from 'react-router-dom'
import './navBar.less'

const NavBar = ({ navItems }) => (
  <div className='navbar'>
    <ul>
      {navItems &&
        navItems.length > 0 &&
        navItems.map(item => (
          <li key={item.name}>
            <Link to={item.path}>
              <span className={`iconfont ${item.icon}`} />
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
    </ul>
  </div>
)

export default NavBar
