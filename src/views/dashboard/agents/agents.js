import React from 'react'
import './agents.less'
import { arrayNotEmpty } from '../../../utils/common'
import Resources from './resources'
import Button from '../../../components/button/button'

const Agents = ({ agents }) => (
  <div className='agents'>
    {arrayNotEmpty(agents) &&
      agents.map(agent => (
        <div key={agent.id} className='agent-container'>
          <div className='agent-system'>
            <img alt={agent.os} src={`/assets/os-icons/${agent.os}.png`} />
          </div>
          <div className='agent-details'>
            <div className='agent-info'>
              <div>
                <span className='iconfont icon-desktop' />
                <span className='agent-name'>{agent.name}</span>
              </div>
              <div className='agent-status'>
                <div className={`agent-${agent.status}`}>{agent.status}</div>
              </div>
              <div className='agent-ip'>
                <span className='iconfont icon-info' />
                <span className='ip'>{agent.ip}</span>
              </div>
              <div className='agent-location'>
                <span className='iconfont icon-folder' />
                <span>{agent.location}</span>
              </div>
            </div>
            <div className='user-action'>
              <div className='add-resource'>
                <Button theme='default' icon='plus' />
              </div>
              <Resources resources={agent.resources} />
              {agent.status === 'building' && (
                // <button className='deny-resource'>
                //   <span className='iconfont icon-deny' />
                //   Deny
                // </button>
                <div className='deny-resource'>
                  <Button theme='default' icon='deny'>
                    Deny
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
  </div>
)

export default Agents
