import React, { useState } from 'react'
import AlphabetModal from './AlphabetModal'
import alphabet from '../utils/alphabet'
import { Character } from '../utils/types'

const Alphabet: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [modalCharacter, setModalCharacter] = useState<Character>(alphabet[0])

  const boxStyle = {
    width: '164px',
    height: '164px',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: '10px'
  }

  const openModal = (letter: Character) => {
    setModalCharacter(letter)
    setModalOpen(true)
  }

  const letterBox = (letter: Character) => {
    return (
      <div className='column' key={letter.name}>
        <div
          onClick={() => openModal(letter)}
          className='box'
          style={boxStyle}
        >
          <figure className='image is-128x128'>
            <img alt={letter.name} src={letter.path} style={{ position: 'relative', marginTop: '-15px' }}/>
            <figcaption className='has-text-centered'>{letter.name}</figcaption>
          </figure>
        </div>
      </div>
    )
  }

  return (
    <div className='container'>
      <AlphabetModal
        letter={modalCharacter}
        setModalCharacter={setModalCharacter}
        isActive={modalOpen}
        setModalOpen={setModalOpen}
        alphabet={alphabet}
      />
      <div className='hero is-primary mb-4'>
        <div className='hero-body has-text-centered'>
          <h1 className='title'>Linear A Alphabet</h1>
        </div>
      </div>
      <div className='columns is-multiline is-mobile is-variable is-0-mobile'>
        {alphabet.map(character => letterBox(character))}
      </div>
      <div className='content has-text-centered pb-4 pt-4'>
        <p>This page uses public domain vector graphics from <a href='https://commons.wikimedia.org/wiki/Category:Linear_A_signs'>Wikimedia Commons</a></p>
      </div>
    </div>
  )
}

export default Alphabet