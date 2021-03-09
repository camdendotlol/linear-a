import React, { useEffect, useRef } from 'react'

import { Character } from '../utils/types'

import bootstrapIcons from '../utils/bootstrapIconPaths'

interface Props {
  letter: Character,
  setModalCharacter(character: Character): void,
  isActive: boolean,
  setModalOpen(boolean: boolean): void,
  characters: Array<Character>
}

const leftIconStyle = {
  left: '8px'
}

const rightIconStyle = {
  right: '8px'
}

const CharacterModal: React.FC<Props> = ({ letter, setModalCharacter, isActive, setModalOpen, characters }: Props) => {

  // Focus the modal so the keyboard listener works
  const divToFocus = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (divToFocus && isActive) {
      divToFocus?.current?.focus()
    }
  }, [isActive])
  const watchKeyPress = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === 'ArrowRight') {
      setModalCharacter(characters[getNewIndexIncrement(characterIndex)])
    } else if (e.key === 'ArrowLeft') {
      setModalCharacter(characters[getNewIndexDecrement(characterIndex)])
    } else if (e.key === 'Escape') {
      setModalOpen(false)
    }
  }

  // Find the index for the current character, so we can cycle to the next or previous one
  // when arrow keys or buttons are used.
  const characterIndex = characters.findIndex(char => char.name === letter.name)
  const getNewIndexIncrement = (index: number): number => {
    if (index === characters.length - 1) {
      return 0
    } else {
      return index + 1
    }    
  }
  const getNewIndexDecrement = (index: number): number => {
    if (index === 0) {
      return characters.length - 1
    } else {
      return index - 1
    }
  }

  return (
    <div className={isActive ? 'modal is-active' : 'modal'} onKeyDown={e => watchKeyPress(e)} tabIndex={0} ref={divToFocus} >
      <div className='modal-background' onClick={() => setModalOpen(false)} />
      <div className='modal-content'>
        <button
          className='nav-button'
          style={ leftIconStyle }
          onClick={() => setModalCharacter(characters[getNewIndexDecrement(characterIndex)])}
        >
          <img src={bootstrapIcons.arrowLeftCircle} alt='Previous character'/>
        </button>
        <button
          className='nav-button'
          style={ rightIconStyle }
          onClick={() => setModalCharacter(characters[getNewIndexIncrement(characterIndex)])}
        >
          <img src={bootstrapIcons.arrowRightCircle} alt='Next character' />
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

export default CharacterModal