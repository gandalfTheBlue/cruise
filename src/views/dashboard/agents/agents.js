import React from 'react'
import './agents.less'

const Agents = ({ agents }) => (
  <div className='agents'>
    {agents.map(agent => (
      <div key={agent.id} className='agent-container'>
        {agent.name}
      </div>
    ))}
  </div>
)

export default Agents
