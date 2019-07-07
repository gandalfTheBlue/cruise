import React from 'react'
import './footer.less'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className='cruise-footer'>
      © Copyright {year} &nbsp; <b>Thought</b>Works
    </div>
  )
}

export default Footer
