import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import BeachesIndex from './BeachesIndex'
import BeachesShow from './BeachesShow';
export const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={BeachesIndex} />
        <Route exact path='/beaches' component={BeachesIndex} />
        <Route exact path="/beaches/:id/" component={BeachesShow} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
