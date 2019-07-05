import React from 'react'
import { Route } from 'react-router-dom'
import Dashboard from './views/dashboard'

function AppRouter() {
  return (
    <div>
      <Route path='/' exact component={Dashboard} />
      <Route path='/dashboard' component={Dashboard} />
    </div>
  )
}

export default AppRouter
