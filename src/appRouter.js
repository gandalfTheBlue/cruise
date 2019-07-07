import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Dashboard from './views/dashboard/dashboard'
import Agent from './views/agent/agent'
import MyCruise from './views/myCruise/myCruise'
import Help from './views/help/help'

function AppRouter() {
  return (
    <div>
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/agent' component={Agent} />
      <Route path='/mycruise' component={MyCruise} />
      <Route path='/help' component={Help} />
      <Redirect from='/' to='/agent' />
    </div>
  )
}

export default AppRouter
