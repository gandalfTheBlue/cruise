import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './views/dashboard'

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path='/' exact component={Dashboard} />
        <Route path='/dashboard' component={Dashboard} />
      </div>
    </Router>
  )
}

export default AppRouter
