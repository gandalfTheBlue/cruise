import React, { useState, useEffect } from 'react'
import Status from './status/status'
import Filter from './filter/filter'
import { httpGet, httpPut } from '../../utils/request'
import Agents from './agents/agents'
import { updArryEleById } from '../../utils/common'

export const FilterTypeCtx = React.createContext(null)

const Agent = () => {
  const [agents, setAgents] = useState([])
  const [selectedType, setSelectedType] = useState('All')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    async function fetchAgents() {
      const response = await httpGet('/agents')
      setAgents(response.data)
    }
    fetchAgents()
  }, [])

  function getStatus(agents) {
    const idles = agents.filter(agent => agent.status === 'idle').length
    const buildings = agents.length - idles
    const physicals = agents.filter(agent => agent.type === 'physical').length
    const virtuals = agents.length - physicals
    return {
      Idle: idles,
      Building: buildings,
      PHYSICAL: physicals,
      VIRTUAL: virtuals,
      ALL: agents.length
    }
  }

  function selectType(type) {
    setSelectedType(type)
  }

  async function updateAgent(agent) {
    const response = await httpPut(`/agents/${agent.id}`, agent)
    const updatedAgents = updArryEleById(agents, response.data)
    setAgents(updatedAgents)
  }

  return (
    <FilterTypeCtx.Provider
      value={{ selectedType, selectType, filter, setFilter }}
    >
      <div>
        <Status status={getStatus(agents)} />
        <Filter />
        <Agents agents={agents} updateAgent={updateAgent} />
      </div>
    </FilterTypeCtx.Provider>
  )
}

export default Agent
