import React from 'react'
import alphabetFiles from '../utils/alphabetFiles'

const Alphabet = () => {
  const letterBox = (letterPath: string) => {
    return (
      <div className='column' key={letterPath}>
        <div className='box' style={{ width: '164px', height: '164px', marginRight: 'auto', marginLeft: 'auto' }}>
          <figure className='image is-128x128'>
            <img alt={letterPath.substring(10, letterPath.length - 4)} src={letterPath} style={{ position: 'relative', marginTop: '-15px' }}/>
          </figure>
        </div>
      </div>
    )
  }

  return (
    <div className='container'>
      <div className='hero is-primary mb-4'>
        <div className='hero-body has-text-centered'>
          <h1 className='title'>Linear A Alphabet</h1>
        </div>
      </div>
      <div className='columns is-multiline is-mobile is-variable is-0-mobile'>
        {alphabetFiles.map(letter => letterBox(letter))}
      </div>
      <div className='content has-text-centered pb-4 pt-4'>
        <p>This page uses public domain vector characters from <a href='https://commons.wikimedia.org/wiki/Category:Linear_A_signs'>Wikimedia Commons</a></p>
      </div>
    </div>
  )
}

export default Alphabet