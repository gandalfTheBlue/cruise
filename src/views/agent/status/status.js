import React from 'react'
import './status.less'

const cards = [
  {
    type: 'Building',
    typeClass: 'building',
    customClass: 'icon-cog rotating'
  },
  {
    type: 'Idle',
    typeClass: 'idle',
    customClass: 'icon-coffee'
  }
]

const statistics = ['ALL', 'PHYSICAL', 'VIRTUAL']

const Card = ({ card, number }) => (
  <div className='status-container'>
    <div className={`status-card ${card.typeClass}`}>
      <span className={`iconfont ${card.customClass}`} />
      <span className='type'>{card.type}</span>
      <div className='number'>{number}</div>
    </div>
  </div>
)

const Status = ({ status }) => (
  <div className='status'>
    {cards.map(card => (
      <Card card={card} key={card.type} number={status[card.type]} />
    ))}
    <div className='status-container'>
      <div className='status-statistic'>
        {statistics.map(item => (
          <div key={item} className='stat-item'>
            <span className='type'>{item}</span>
            <span className='number'>{status[item]}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Status
