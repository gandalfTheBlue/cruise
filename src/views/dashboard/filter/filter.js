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
    <div className='container'>
      <TypeFilter />
    </div>
    <div className='container' />
    <div className='container' />
  </div>
)

export default Filter
