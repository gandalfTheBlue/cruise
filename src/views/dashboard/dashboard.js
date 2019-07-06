import React, { useState, useEffect } from 'react'
import Status from './status/status'
import Filter from './filter/filter'
import { httpGet } from '../../utils/request'

const Dashboard = () => {
  const [agents, setAgents] = useState([])

  useEffect(() => {
    async function fetchAgents() {
      const response = await httpGet('/agents')
      setAgents(response.data)
    }
    fetchAgents()
  }, [])

  return (
    <div>
      <Status />
      <Filter />
    </div>
  )
}

export default Dashboard
