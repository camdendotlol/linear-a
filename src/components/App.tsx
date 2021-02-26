import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import HomePage from './HomePage'
import Alphabet from './Alphabet'
import Texts from './Texts'
import History from './History'
import Resources from './Resources'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/alphabet'>
          <Alphabet />
        </Route>
        <Route path='/texts'>
          <Texts />
        </Route>
        <Route path='/history'>
          <History />
        </Route>
        <Route path='/resources'>
          <Resources />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
