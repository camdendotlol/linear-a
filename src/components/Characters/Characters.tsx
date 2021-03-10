import React, { useState } from 'react'
import CharacterModal from './CharacterModal'
import characters from '../../utils/characters'
import { Character } from '../../utils/types'

const Characters: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [modalCharacter, setModalCharacter] = useState<Character>(characters[0])

  const boxStyle = {
    width: '164px',
    height: '164px',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: '10px'
  }

  const letterSvgStyle = {
    position: 'relative' as const, // fixes a weird Typescript bug
    marginTop: '-15px'
  }

  const openModal = (letter: Character) => {
    setModalCharacter(letter)
    setModalOpen(true)
  }

  // give blue background to characters that also appear in Linear B
  const chooseLetterBackground = (inLinearB: boolean): string => {
    return inLinearB
      ? ' has-background-secondary'
      : ''
  }

  const letterBox = (letter: Character) => {
    return (
      <div className='column' key={letter.name}>
        <div
          onClick={() => openModal(letter)}
          className={'box character-box has-text-black' + chooseLetterBackground(letter.inLinearB) }
          style={boxStyle}
        >
          <figure className='image is-128x128'>
            <img alt={letter.name} src={letter.path} style={ letterSvgStyle }/>
            <figcaption className='has-text-centered'>{letter.name}</figcaption>
          </figure>
        </div>
      </div>
    )
  }

  return (
    <div>
      <CharacterModal
        letter={modalCharacter}
        setModalCharacter={setModalCharacter}
        isActive={modalOpen}
        setModalOpen={setModalOpen}
        characters={characters}
      />
      <div className='hero mb-4'>
        <div className='hero-body has-text-centered'>
          <h1 className='title'>Characters</h1>
        </div>
      </div>
      <div className='container'>
        <div className='box'>
          <div className='content has-text-black is-size-5'>
            <p>Linear A contains hundreds of characters, though the exact number is unknown due to the low number of texts discovered. Some of the characters are theorized to represent sounds, while others may represent syllables or even entire words. This mix makes it harder to decipher the language, because researchers can only make an informed guess as to the type of each character.</p>
            <p>However, this did not stop the collaborative effort in the early twentieth century to decipher Linear A&apos;s successor, Linear B, whose system of characters is nearly as complex. Linear B contains some of the same symbols and represents Mycenaean Greek, the earliest known form of Greek. Even with some symbols in common, attempts to decipher Linear A with what is known of Linear B only results in indecipherable gibberish.</p>
            <p>Below are just some of the characters in the Linear A script. Click or tap on a character to take a closer look. The popup also provides a text version of the character that you can copy/paste (this may appear as a box if your device lacks Unicode support), as well as the Unicode number and the standard identification code used by historians.</p>
            <p>Characters that also appear in Linear B have a blue-tinted background. This does not guarantee that they represent the same sound as their Linear B counterparts.</p>
          </div>
        </div>
        
        <div className='columns is-multiline is-mobile is-variable is-0-mobile'>
          {characters.map(character => letterBox(character))}
        </div>
      </div>
    </div>
  )
}

export default Characters