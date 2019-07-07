import React, { useState, useEffect } from 'react'
import Status from './status/status'
import Filter from './filter/filter'
import { httpGet, httpPut } from '../../utils/request'
import Agents from './agents/agents'
import { updArryEleById } from '../../utils/common'

const Agent = () => {
  const [agents, setAgents] = useState([])

  useEffect(() => {
    async function fetchAgents() {
      const response = await httpGet('/agents')
      setAgents(response.data)
    }
    fetchAgents()
  }, [])

  async function updateAgent(agent) {
    const response = await httpPut(`/agents/${agent.id}`, agent)
    const updatedAgents = updArryEleById(agents, response.data)
    setAgents(updatedAgents)
  }

  return (
    <div>
      <Status />
      <Filter />
      <Agents agents={agents} updateAgent={updateAgent} />
    </div>
  )
}

export default Agent
