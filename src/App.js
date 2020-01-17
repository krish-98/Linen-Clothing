import React from 'react'
import {  Route, Switch  } from 'react-router-dom'
import HomePage from '../src/pages/homepage/homepage'

import './App.css'

const Hats =() => (
  <h1>Hats Page</h1>
)

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={Hats} />
      </Switch>
    </div>
  )
}

export default App
