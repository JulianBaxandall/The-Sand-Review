import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import BeachesIndex from './BeachesIndex'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={BeachesIndex}/>
      </Switch>
    </BrowserRouter>
)
}

export default App
