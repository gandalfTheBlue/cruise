import React, { useState, useRef, useEffect } from 'react'
import './popover.less'
import { useClickOutside } from '../../customHooks/useClickOutside'
import Button from '../button/button'

const calcPosition = target => {
  let position = {}
  if (target) {
    const boundingClientRect = target.getBoundingClientRect()
    position = {
      top:
        boundingClientRect.top +
        window.scrollY +
        boundingClientRect.height +
        12,
      left:
        boundingClientRect.left + window.scrollX - boundingClientRect.width / 2,
      bottom: boundingClientRect.bottom
    }
  }
  return position
}

const Popover = props => {
  const { popover } = props
  const position = calcPosition(popover.target)
  const [value, setValue] = useState('')
  const wrapperRef = useRef(null)
  const inputRef = useRef(null)
  const hidePopOverAction = () => {
    props.hidePopover()
    setValue('')
  }
  useClickOutside(wrapperRef, hidePopOverAction)

  const addResources = () => {
    props.addResources(
      popover.agentId,
      value.split(',').map(item => item.trim())
    )
    hidePopOverAction()
  }

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus()
    }
    if (wrapperRef && wrapperRef.current) {
      const bounding = wrapperRef.current.getBoundingClientRect()
      if (
        bounding.bottom >
        (window.innerHeight || document.documentElement.clientHeight)
      ) {
        window.scrollBy(0, 150)
      }
    }
  }, [popover.visible])

  return popover.visible ? (
    <div ref={wrapperRef} style={position} className='cruise-popover'>
      <div className='cruise-popover-pointer' />
      <span className='iconfonts icon-close' onClick={hidePopOverAction} />
      <div className='popover-detail'>
        <div className='popover-title'>
          Separate multiple resources name with commas
        </div>
        <div className='popover-input'>
          <input
            value={value}
            placeholder='e.g. Chrome, Firefox'
            onChange={e => setValue(e.target.value)}
            ref={inputRef}
          />
        </div>
        <div className='popover-actions'>
          <Button theme='default' handleClick={addResources}>
            Add resources
          </Button>
          <Button theme='dark' handleClick={hidePopOverAction}>
            Cancel
          </Button>
        </div>
      </div>
      <div />
    </div>
  ) : null
}

export default Popover
