import React from 'react'
import './agents.less'
import { arrayNotEmpty } from '../../../utils/common'

const Resources = ({ resources }) => (
  <div className='agent-resources'>
    {arrayNotEmpty(resources) &&
      resources.map(resource => (
        <div key={resource}>
          <span className='resource-name'>{resource}</span>
          <span className='iconfont icon-trash' />
        </div>
      ))}
  </div>
)

export default Resources
