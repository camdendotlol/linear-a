import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../images/icon.png'

const Navbar = () => {
  return (
    <div className='navbar is-family-secondary'>
      <div className='container'>
        <div className='navbar-brand'>
          <Link className='navbar-item' to='/'>
            <img src={icon} alt='home' />
          </Link>
        </div>
        <div className='navbar-menu'>
          <div className='navbar-end'>
            <Link className='navbar-item' to='/alphabet'>
              Alphabet
            </Link>
            <Link className='navbar-item' to='/texts'>
              Texts
            </Link>
            <Link className='navbar-item' to='/history'>
              History
            </Link>
            <Link className='navbar-item' to='/resources'>
              Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar