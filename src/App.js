import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.less'
import Header from './components/header/header'
import NavBar from './components/navBar/navBar'
import AppRouter from './appRouter'
import HistoryLog from './components/historyLog/historyLog'

const navItems = [
  { name: 'DASHBOARD', path: '/dashboard', icon: 'icon-dashboard' },
  { name: 'AGENT', path: '/agent', icon: 'icon-sitemap' },
  { name: 'MY CRUISE', path: '/myCruise', icon: 'icon-boat' },
  { name: 'HELP', path: '/help', icon: 'icon-life-bouy' }
]

const histories = [
  { id: 2, agent: 'bjstdmngbgr02', action: 'Acceptance_test' },
  { id: 3, agent: 'bjstdmngbgr03', action: 'Acceptance_test' },
  { id: 4, agent: 'bjstdmngbgr04', action: 'Acceptance_test' },
  { id: 5, agent: 'bjstdmngbgr05', action: 'Acceptance_test_too_long' },
  { id: 6, agent: 'bjstdmngbgr06', action: 'Acceptance_test' },
  { id: 7, agent: 'bjstdmngbgr07', action: 'Acceptance_test' },
  { id: 8, agent: 'bjstdmngbgr08', action: 'Acceptance_test' },
  { id: 9, agent: 'bjstdmngbgr09', action: 'Acceptance_test' },
  { id: 10, agent: 'bjstdmngbgr11', action: 'Acceptance_test' },
  { id: 11, agent: 'bjstdmngbgr12', action: 'Acceptance_test' },
  { id: 12, agent: 'bjstdmngbgr13', action: 'Acceptance_tes' }
]

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <div className='content'>
          <div className='left-side'>
            <NavBar navItems={navItems} />
            <HistoryLog histories={histories} />
          </div>
          <div className='main'>
            <AppRouter />
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
