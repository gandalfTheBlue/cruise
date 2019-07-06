import * as React from 'react'
import { arrayNotEmpty } from '../../utils/common'
import './historyLog.less'

const HistoryLog = ({ histories }) => (
  <div className='history'>
    <span className='history-title'>History</span>
    <ul>
      {arrayNotEmpty(histories) &&
        histories.map(history => (
          <li key={history.id}>
            <span className='history-dot' />
            <p>
              {history.agent}/{history.action}
            </p>
          </li>
        ))}
    </ul>
  </div>
)

export default HistoryLog
