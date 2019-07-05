import React from 'react'
import { NavLink } from 'react-router-dom'
import './navBar.less'
import { arrayNotEmpty } from '../../utils/common'

const NavBar = ({ navItems }) => (
  <div className='navbar'>
    <ul>
      {arrayNotEmpty(navItems) &&
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
