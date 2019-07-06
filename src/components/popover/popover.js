import React, { useRef } from 'react'
import './popover.less'
import { useClickOutside } from '../../customHooks/useClickOutside'

const Popover = props => {
  let position = {}
  const wrapperRef = useRef(null)
  useClickOutside(wrapperRef, props.clickOutside)

  if (props.target) {
    const boundingClientRect = props.target.getBoundingClientRect()
    position = {
      top:
        boundingClientRect.top +
        window.scrollY +
        boundingClientRect.height +
        12,
      left:
        boundingClientRect.left + window.scrollX - boundingClientRect.width / 2
    }
  }

  return props.visible ? (
    <div ref={wrapperRef} style={position} className='cruise-popover'>
      <div className='cruise-popover-pointer' />
      <div />
    </div>
  ) : null
}

export default Popover
