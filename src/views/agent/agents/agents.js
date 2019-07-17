import React, { useState, useContext } from 'react'
import './agents.less'
import {
  arrayNotEmpty,
  getArryEleById,
  removeEleFromArr
} from '../../../utils/common'
import Resources from './resources'
import Button from '../../../components/button/button'
import Popover from '../../../components/popover/popover'
import { FilterTypeCtx } from '../agent'

const Agents = ({ agents, updateAgent }) => {
  const [popover, setPopover] = useState({
    visible: false,
    agentId: null,
    target: null
  })
  const hidePopover = () => setPopover(Object.assign({}, { visible: false }))

  const deleteResource = (agentId, resource) => {
    let agent = getArryEleById(agents, agentId)
    agent.resources = removeEleFromArr(agent.resources, resource)
    updateAgent(agent)
  }

  const addResources = (agentId, resources) => {
    let agent = getArryEleById(agents, agentId)
    agent.resources = [...new Set(agent.resources.concat(resources))]
    updateAgent(agent)
  }

  const [selectedType] = useContext(FilterTypeCtx)
  if (selectedType !== 'All') {
    agents = agents.filter(
      agent => agent.type.toLowerCase() === selectedType.toLowerCase()
    )
  }

  return (
    <div className='agents'>
      {arrayNotEmpty(agents) &&
        agents
          .filter(agent => agent.type)
          .map(agent => (
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
                    <div className={`agent-${agent.status}`}>
                      {agent.status}
                    </div>
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
                      setPopover(
                        Object.assign(
                          {},
                          {
                            visible: true,
                            agentId: agent.id,
                            target: e.currentTarget
                          }
                        )
                      )
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
        popover={popover}
        hidePopover={hidePopover}
        addResources={addResources}
      />
    </div>
  )
}

export default Agents
