import React, { CSSProperties, useEffect, useState } from 'react'
import bootstrapIcons from '../../utils/bootstrapIconPaths'

// TODO: This should have a set of words, not too many, that can be formed
// with the combined phonetic pronunciations of the names of some icons.
// The game should present those icons, plus some random ones using
// getRandomIcon() to mix things up a bit.
//
// Current ideas:
// horizon - her eye sun
// yellow - yell circle
// excellent - egg sell int (as in integer) (maybe too hard?)
// thinkpiece - think (dialog bubble?) puzzle piece
// piecemeal - peace sign fried egg
// hot rod - high temperature thermometer, up arrow?

// Let's not bother checking for correct answers, the game should just
// provide a "next" button to go to the next word.

const RebusGame:React.FC = () => {
  const wordTable: {[key: string]: Array<string>} = {
    yellow: [bootstrapIcons.megaphone, bootstrapIcons.circle],
    hotrod: [bootstrapIcons.thermometerSun, bootstrapIcons.arrowUp]
  }

  const [unusedWords, setUnusedWords] = useState<Array<string>>(Object.keys(wordTable))
  const [currentWord, setCurrentWord] = useState<string | null>(null)
  const [iconChoices, setIconChoices] = useState<Array<string> | null>(null)
  const [selectedIcons, setSelectedIcons] = useState<Array<string>>([])

  const pickNewWord = (wordList: Array<string>) => {
    const newWord = wordList[Math.floor(Math.random() * wordList.length)]
    setUnusedWords(wordList.filter(w => w !== newWord))
    return newWord
  }

  // Get an array of the keys so we can use Math.random() to pick icons
  const keys = Object.keys(bootstrapIcons)

  // Pick a random icon from the list, taking random key from the array and then
  // using the key to access its associated value in the bootstrapIcons object
  const getRandomIcon = (currentList: Array<string>): string => {
    const newIcon = bootstrapIcons[keys[Math.floor(Math.random() * keys.length)]]
    if (currentList.includes(newIcon)) {
      return getRandomIcon(currentList)
    } else {
      return newIcon
    }
  }

  const getChoices = (word: string | null) => {
    if (!word) return null
    let choiceList = wordTable[word]
    const fillList = (list: Array<string>): Array<string> => {
      if (choiceList.length < 9) {
        choiceList = choiceList.concat(getRandomIcon(list))
        if (choiceList.length < 9) {
          return fillList(choiceList)
        }
      }
      return list
    }
    return fillList(choiceList)
  }

  useEffect((): void => {
    let newWord = null
    if (unusedWords.length > 0) {
      if (!currentWord) {
        newWord = pickNewWord(unusedWords)
        setCurrentWord(newWord)
      }
      setIconChoices(getChoices(newWord))
    }
  }, [])

  const toggleIconSelection = (icon: string): void => {
    if (selectedIcons.includes(icon)) {
      setSelectedIcons(selectedIcons.filter(i => i !== icon))
    } else {
      if (selectedIcons.length < 4) {
        setSelectedIcons(selectedIcons.concat(icon))
      }
    }
  }

  const getIconBoxStyle = (iconPath: string): CSSProperties => {
    if (selectedIcons.includes(iconPath)) {
      return { background: '#68C6DE' }
    } else {
      return { }
    }
  }

  const iconBox = (iconPath: string) => {
    return (
      <div className='column' key={iconPath}>
        <div
          className='box rebus-icon'
          style={ getIconBoxStyle(iconPath) }
          onClick={ () => toggleIconSelection(iconPath) }
        >
          <figure className='image is-square'>
            <img src={iconPath} />
          </figure>
        </div>
      </div>
    )
  }

  const inputIconBox = (iconPath: string) => {
    return (
      <div
        className='box rebus-icon'
        style={ getIconBoxStyle(iconPath) }
        onClick={ () => toggleIconSelection(iconPath) }
      >
        <figure className='image is-square'>
          <img src={iconPath} />
        </figure>
      </div>
    )
  }

  return (
    <div>
      <div className='container' style={{ maxWidth: '1000px' }}>
        <div className='content has-text-centered has-text-white'>
          <h4 className='title has-text-white'>Can you write &quot;<strong>{currentWord}</strong>&quot; with these symbols?</h4>
          <p>Tip: Think about how each one is pronounced, and pick a combination of symbols whose pronunciation matches the word.</p>
          <p>Click on a symbol to add, click again to remove.</p>
        </div>
        <div className='columns is-multiline is-mobile is-variable is-0-mobile'>
          { iconChoices?.map(i => iconBox(i)) }
        </div>
        <div className='box rebus-input-box'>
          <div className='is-0-mobile is-flex is-justify-content-center'>
            { selectedIcons?.map(i => inputIconBox(i)) }
          </div>
        </div>
      </div>
    </div>
  )
}

export default RebusGame