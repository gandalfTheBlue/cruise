import React, { useState } from 'react'
import './agents.less'
import {
  arrayNotEmpty,
  getArryEleById,
  removeEleFromArr
} from '../../../utils/common'
import Resources from './resources'
import Button from '../../../components/button/button'
import Popover from '../../../components/popover/popover'

const Agents = ({ agents, updateAgent }) => {
  const [popoverVisible, setPopoverVisible] = useState(false)
  const [popoverTarget, setPopoverTarget] = useState(null)
  const hidePopover = () => setPopoverVisible(false)

  const deleteResource = (agentId, resource) => {
    let agent = getArryEleById(agents, agentId)
    agent.resources = removeEleFromArr(agent.resources, resource)
    updateAgent(agent)
  }

  return (
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
                <div
                  className='add-resource'
                  onClick={e => {
                    setPopoverVisible(true)
                    setPopoverTarget(e.currentTarget)
                  }}
                >
                  <Button theme='default' icon='plus' />
                </div>
                <Resources
                  agentId={agent.id}
                  resources={agent.resources}
                  deleteResource={deleteResource}
                />
                {agent.status === 'building' && (
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
      <Popover
        visible={popoverVisible}
        hidePopover={hidePopover}
        target={popoverTarget}
      />
    </div>
  )
}

export default Agents
