import React, { useContext } from 'react'
import './filter.less'
import { FilterTypeCtx } from '../agent'

const types = ['All', 'Physical', 'Virtual']

const TypeFilter = () => {
  const { selectedType, selectType } = useContext(FilterTypeCtx)
  return (
    <div className='type'>
      {types.map(type => (
        <div
          key={type}
          className={selectedType === type ? 'active' : ''}
          onClick={() => selectType(type)}
        >
          {type}
        </div>
      ))}
    </div>
  )
}

const Filter = () => {
  const { filter, setFilter } = useContext(FilterTypeCtx)
  return (
    <div className='filter'>
      <div className='filter-container'>
        <TypeFilter />
      </div>
      <div className='filter-container'>
        <div className='filter-search'>
          <span className='iconfont icon-search' />
          <input value={filter} onChange={e => setFilter(e.target.value)} />
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
}

export default Filter
