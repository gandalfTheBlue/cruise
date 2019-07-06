import React from 'react'
import './button.less'

const Button = props => (
  <button className={`cruise-btn cruise-btn-${props.theme}`}>
    {props.icon && (
      <span
        className={`iconfont icon-${props.icon} ${
          props.children ? 'icon-margin' : ''
        }`}
      />
    )}
    {props.children}
  </button>
)

export default Button
