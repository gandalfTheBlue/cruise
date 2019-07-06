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
      top: boundingClientRect.top + window.scrollY + boundingClientRect.height,
      left:
        boundingClientRect.left + window.scrollX - boundingClientRect.width / 2
    }
  }

  return props.visible ? (
    <div ref={wrapperRef}>
      <div className='cruise-popover' style={position} />
    </div>
  ) : null
}

export default Popover
