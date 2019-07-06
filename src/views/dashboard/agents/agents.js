import React from 'react'
import './agents.less'
import { arrayNotEmpty } from '../../../utils/common'

const Agents = ({ agents }) => (
  <div className='agents'>
    {arrayNotEmpty(agents) &&
      agents.map(agent => (
        <div key={agent.id} className='agent-container'>
          <div className='agent-system'>
            <img
              width='100%'
              height='100%'
              alt={agent.os}
              src={`../../../assets/os-icons/${agent.os}.png`}
            />
          </div>
          <div className='agent-details'>
            <div className='agent-info'>test</div>
            <div className='user-action'>test</div>
          </div>
        </div>
      ))}
  </div>
)

export default Agents
