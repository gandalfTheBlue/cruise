import React, { Component } from 'react'
import './App.less'
import Header from './components/header/header'
import AppRouter from './appRouter'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <AppRouter />
      </div>
    )
  }
}

export default App
