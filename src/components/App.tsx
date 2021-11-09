import React, { useEffect } from 'react'
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import Navbar from './Navbar'
import HomePage from './HomePage'
import Characters from './Characters/Characters'
import History from './History/History'
import Resources from './Resources'
import Legal from './Legal'

const App: React.FC = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Give it a black background on the homepage to fit in with the other elements
  const setFooterBackgroundColor = (): string => {
    return pathname === '/'
      ? ' has-background-black'
      : ''
  }

  // Set text to white if the background is black
  const setFooterTextColor = (): string => {
    return pathname === '/'
      ? 'has-text-white'
      : 'has-text-black'
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/history' element={<History />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/legal' element={<Legal />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
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
