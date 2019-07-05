import React from 'react'
import { NavLink } from 'react-router-dom'
import './navBar.less'

const NavBar = ({ navItems }) => (
  <div className='navbar'>
    <ul>
      {navItems &&
        navItems.length > 0 &&
        navItems.map(item => (
          <li key={item.name}>
            <NavLink to={item.path} activeClassName='active'>
              <span className={`iconfont ${item.icon}`} />
              <span>{item.name}</span>
            </NavLink>
          </li>
        ))}
    </ul>
  </div>
)

export default NavBar
