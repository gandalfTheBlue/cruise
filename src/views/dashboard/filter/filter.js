import React, { useState } from 'react'
import './filter.less'

const types = ['All', 'Physical', 'Virtual']

const TypeFilter = () => {
  const [selectedType, setSelectedType] = useState('All')
  return (
    <div className='type'>
      {types.map(type => (
        <div
          key={type}
          className={selectedType === type ? 'active' : ''}
          onClick={() => setSelectedType(type)}
        >
          {type}
        </div>
      ))}
    </div>
  )
}

const Filter = () => (
  <div className='filter'>
    <div className='filter-container'>
      <TypeFilter />
    </div>
    <div className='filter-container'>
      <div className='filter-search'>
        <span className='iconfont icon-search' />
        <input />
      </div>
    </div>
    <div className='filter-container'>
      <div className='filter-display'>
        <span className='iconfont icon-th-card' />
        <span className='iconfont icon-th-list' />
      </div>
    </div>
  </div>
)

export default Filter
