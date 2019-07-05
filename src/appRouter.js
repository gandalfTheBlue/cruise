import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Dashboard from './views/dashboard'

function AppRouter() {
  return (
    <div>
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/agent' component={Dashboard} />
      <Route path='/mycruise' component={Dashboard} />
      <Route path='/help' component={Dashboard} />
      <Redirect from='/' to='/dashboard' />
    </div>
  )
}

export default AppRouter
