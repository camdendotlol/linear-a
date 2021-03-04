import React, { useEffect } from 'react'
import { Switch, Route, useLocation, Link } from 'react-router-dom'
import Navbar from './Navbar'
import HomePage from './HomePage'
import Alphabet from './Alphabet'
import Texts from './Texts'
import History from './History'
import Resources from './Resources'
import Legal from './Legal'

const App: React.FC = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const setFooterBackgroundColor = (): string => {
    if (pathname === '/') {
      return ' has-background-black'
    } else {
      return ''
    }
  }

  const setFooterTextColor = (): string => {
    if (pathname === '/') {
      return 'has-text-white'
    } else {
      return 'has-text-black'
    }
  }

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
        <Route path='/legal'>
          <Legal />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
      <footer className={ 'hero mg-0 has-text-centered' + setFooterBackgroundColor() }>
        <div className='hero-body'>
          <p>
            <Link className={ setFooterTextColor() } to='/legal'>Legal information</Link>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
