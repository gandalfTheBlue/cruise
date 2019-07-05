import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.less'
import Header from './components/header/header'
import NavBar from './components/navBar/navBar'
import AppRouter from './appRouter'

const navItems = [
  { name: 'DASHBOARD', path: '/dashboard', icon: 'icon-dashboard' },
  { name: 'AGENT', path: '/agent', icon: 'icon-sitemap' },
  { name: 'MY CRUISE', path: '/myCruise', icon: 'icon-boat' },
  { name: 'HELP', path: '/help', icon: 'icon-life-bouy' }
]

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <div className='content'>
          <div className='left-side'>
            <NavBar navItems={navItems} />
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
