import React from 'react'
import './agents.less'

const Agents = ({ agents }) => (
  <div className='agents'>
    {agents.map(agent => (
      <div key={agent.id} className='agent-container'>
        <img
          width='100%'
          height='100%'
          alt={agent.os}
          src={`../../../assets/os-icons/windows.png`}
        />
      </div>
    ))}
  </div>
)

export default Agents
