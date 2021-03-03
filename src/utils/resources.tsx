import { Resource, ResourceType } from './types'

const resources: Array<Resource> = [
  {
    author: 'John Younger',
    title: 'Linear A Texts',
    url: 'https://people.ku.edu/~jyounger/LinearA/',
    type: ResourceType.Website,
    description: 'John Younger is Professor Emeritus of Classics at the University of Kansas, and his old-school website is the richest source of information about Linear A on the internet today.'
  },
  {
    author: 'George Douros',
    title: 'Linear A',
    url: 'https://lineara.xyz/',
    type: ResourceType.Website,
    description: 'This website provides an interactive database of known texts in Linear A, including the ability to search by numerous datapoints such as word, character, scribe, medium, and location.'
  },
  {
    author: 'John Chadwick',
    title: 'The Decipherment of Linear B',
    url: 'https://www.worldcat.org/title/decipherment-of-linear-b/oclc/881293112',
    type: ResourceType.Book,
    description: 'Chadwick was one of the researchers who deciphered Linear A\'s successor language, Linear B. The techniques outlined in this book may be useful in attempts to decipher Linear A.'
  },
  {
    author: 'Hubert La Marle',
    title: 'Reading Linear A : Script, Morphology, and Glossary of Minoan Language',
    url: 'https://www.worldcat.org/title/reading-linear-a-script-morphology-and-glossary-of-minoan-language/oclc/631652453',
    type: ResourceType.Book,
    description: 'A controversial attempt at decipherment that does not seem to have convinced many historians. La Marle claims that Linear A represents a language from the Indo-Iranian language group, which is disputed by John Younger among others.'
  },
  {
    author: 'World History Encyclopedia',
    title: 'The Minoans: A Civilization of Bronze Age Crete',
    url: 'https://www.youtube.com/watch?v=VxnfIe4zgO0',
    type: ResourceType.Video,
    description: 'A brief overview of the Minoan civilization that also touches on Linear A.'
  },
  {
    author: 'The Unicode Consortium',
    title: 'Unicode Utilities: UnicodeSet ',
    url: 'https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=[:Script=Linear_A:]',
    type: ResourceType.Website,
    description: 'The complete list of Linear A characters included in the Unicode standard. Unicode allows devices to display characters as text, as long as they have a font that supports the characters.'
  }
]

export default resources