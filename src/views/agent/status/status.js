import React from 'react'
import './status.less'

const cards = [
  {
    type: 'Building',
    typeClass: 'building',
    customClass: 'icon-cog rotating',
    number: 3
  },
  {
    type: 'Idle',
    typeClass: 'idle',
    customClass: 'icon-coffee',
    number: 5
  }
]

const statistics = [
  {
    type: 'ALL',
    number: 8
  },
  {
    type: 'PHYSICAL',
    number: 4
  },
  {
    type: 'VIRTUAL',
    number: 4
  }
]

const Card = ({ card }) => (
  <div className='status-container'>
    <div className={`status-card ${card.typeClass}`}>
      <span className={`iconfont ${card.customClass}`} />
      <span className='type'>{card.type}</span>
      <div className='number'>{card.number}</div>
    </div>
  </div>
)

const Status = () => (
  <div className='status'>
    {cards.map(card => (
      <Card card={card} key={card.type} />
    ))}
    <div className='status-container'>
      <div className='status-statistic'>
        {statistics.map(item => (
          <div key={item.type} className='stat-item'>
            <span className='type'>{item.type}</span>
            <span className='number'>{item.number}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Status
