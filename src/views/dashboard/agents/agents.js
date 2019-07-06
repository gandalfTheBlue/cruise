import React from 'react'
import './agents.less'

const Agents = ({ agents }) => (
  <div className='agents'>
    {agents.map(agent => (
      <div key={agent.id} className='agent-container'>
        <div className='system'>
          <img
            width='100%'
            height='100%'
            alt={agent.os}
            src={`../../../assets/os-icons/${agent.os}.png`}
          />
        </div>
        <div className='details' />
      </div>
    ))}
  </div>
)

export default Agents
