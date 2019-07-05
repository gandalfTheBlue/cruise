import React from 'react'
import './dashboard.less'

const Status = () => (
  <div className='status-monitor'>
    <div className='container'>
      <div className='card building'>
        <i className='iconfont icon-cog rotating' />
      </div>
    </div>
    <div className='container'>
      <div className='card idle'>
        <i className='iconfont icon-cog' />
      </div>
    </div>
    <div className='container'>
      <div className='card building'>
        <i className='iconfont icon-cog' />
      </div>
    </div>
  </div>
)

export default Status
