import React from 'react'
import './popover.less'

const Popover = props => {
  return props.visible ? (
    <div ref={props.wrapperRef}>
      <div className='cruise-popover' />
    </div>
  ) : null
}

export default Popover
