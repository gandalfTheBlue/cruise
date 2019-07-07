import React from 'react'
import './agents.less'
import { arrayNotEmpty } from '../../../utils/common'

const Resources = ({ agentId, resources, deleteResource }) => (
  <div className='agent-resources'>
    {arrayNotEmpty(resources) &&
      resources.map(resource => (
        <div key={resource}>
          <span className='resource-name'>{resource}</span>
          <span
            className='iconfont icon-trash'
            onClick={() => deleteResource(agentId, resource)}
          />
        </div>
      ))}
  </div>
)

export default Resources
