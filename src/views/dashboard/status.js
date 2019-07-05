import React from 'react'
import './dashboard.less'

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
  <div className='container'>
    <div className={`card ${card.typeClass}`}>
      <span className={`iconfont ${card.customClass}`} />
      <span className='type'>{card.type}</span>
      <div className='number'>{card.number}</div>
    </div>
  </div>
)

const Status = () => (
  <div className='status-monitor'>
    {cards.map(card => (
      <Card card={card} key={card.type} />
    ))}
    <div className='container'>
      <div className='statistic'>
        {statistics.map(item => (
          <div key={item.type} className='item'>
            <span className='type'>{item.type}</span>
            <span className='number'>{item.number}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Status
