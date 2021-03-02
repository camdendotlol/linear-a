import React, { useEffect, useRef } from 'react'

import { Character } from '../utils/types'

import leftArrow from '../images/leftarrow.svg'
import rightArrow from '../images/rightarrow.svg'

interface Props {
  letter: Character,
  setModalCharacter: Function,
  isActive: boolean,
  setModalOpen: Function,
  alphabet: Array<Character>
}

const leftIconStyle = {
  left: '8px'
}

const rightIconStyle = {
  right: '8px'
}

const AlphabetModal = ({ letter, setModalCharacter, isActive, setModalOpen, alphabet }: Props) => {
  const divToFocus = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (divToFocus && isActive) {
      console.log('focus')
      divToFocus?.current?.focus()
    }
  }, [isActive])

  const characterIndex = alphabet.findIndex(char => char.name === letter.name)

  const getNewIndexIncrement = (index: number): number => {
    if (index === alphabet.length - 1) {
      return 0
    } else {
      return index + 1
    }    
  }

  const getNewIndexDecrement = (index: number): number => {
    if (index === 0) {
      return alphabet.length - 1
    } else {
      return index - 1
    }
  }

  const watchKeyPress = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === 'ArrowRight') {
      setModalCharacter(alphabet[getNewIndexIncrement(characterIndex)])
    } else if (e.key === 'ArrowLeft') {
      setModalCharacter(alphabet[getNewIndexDecrement(characterIndex)])
    } else if (e.key === 'Escape') {
      setModalOpen(false)
    }
  }

  return (
    <div className={isActive ? 'modal is-active' : 'modal'} onKeyDown={e => watchKeyPress(e)} tabIndex={0} ref={divToFocus} >
      <div className='modal-background' onClick={() => setModalOpen(false)} />
      <div className='modal-content'>
        <button
          className='nav-button'
          style={ leftIconStyle }
          onClick={() => setModalCharacter(alphabet[getNewIndexDecrement(characterIndex)])}
        >
          <img src={leftArrow} alt='Previous character'/>
        </button>
        <button
          className='nav-button'
          style={ rightIconStyle }
          onClick={() => setModalCharacter(alphabet[getNewIndexIncrement(characterIndex)])}
        >
          <img src={rightArrow} alt='Next character' />
        </button>
        <div className='card'>
          <div className='card-image' style={{ width: '240px', height: '320px', marginLeft: 'auto', marginRight: 'auto' }}>
            <figure className='image is-3by4'>
              <img
                src={letter.path}
                alt={letter.name}
                style={{ marginLeft: 'auto', marginRight: 'auto' }}
              />
            </figure>
          </div>
          <div className='card-content'>
            <p className='title has-text-centered'>
            {String.fromCodePoint(letter.unicode)} {letter.name}
            </p>
            <p className='subtitle has-text-centered is-size-6'>
              Unicode number: {letter.unicode}
            </p>
          </div>
        </div>
      </div>
      <button
        onClick={() => setModalOpen(false)}
        className='modal-close is-large'
        aria-label='close'
      />
    </div>
  )
}

export default AlphabetModal