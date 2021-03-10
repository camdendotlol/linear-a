import { Resource, ResourceType } from './types'

const resources: Array<Resource> = [
  {
    author: 'John Younger',
    title: 'Linear A Texts',
    url: 'https://people.ku.edu/~jyounger/LinearA/',
    type: ResourceType.Website,
    description: 'John Younger is Professor Emeritus of Classics at the University of Kansas, and his old-school website is the richest source of information about Linear A on the internet today.',
    tags: ['Texts', 'Theories']
  },
  {
    author: 'George Douros',
    title: 'Linear A',
    url: 'https://lineara.xyz/',
    type: ResourceType.Website,
    description: 'This website provides an interactive database of known texts in Linear A, including the ability to search by numerous datapoints such as word, character, scribe, medium, and location.',
    tags: ['Texts']
  },
  {
    author: 'John Chadwick',
    title: 'The Decipherment of Linear B',
    url: 'https://www.worldcat.org/title/decipherment-of-linear-b/oclc/881293112',
    type: ResourceType.Book,
    description: 'Chadwick was one of the researchers who deciphered Linear A\'s successor language, Linear B. The techniques outlined in this book may be useful in attempts to decipher Linear A.',
    tags: ['Linear B', 'Decipherment']
  },
  {
    author: 'Hubert La Marle',
    title: 'Reading Linear A : Script, Morphology, and Glossary of Minoan Language',
    url: 'https://www.worldcat.org/title/reading-linear-a-script-morphology-and-glossary-of-minoan-language/oclc/631652453',
    type: ResourceType.Book,
    description: 'A controversial attempt at decipherment that does not seem to have convinced many historians. La Marle claims that Linear A represents a language from the Indo-Iranian language group, which is disputed by John Younger among others.',
    tags: ['Theories']
  },
  {
    author: 'World History Encyclopedia',
    title: 'The Minoans: A Civilization of Bronze Age Crete',
    url: 'https://www.youtube.com/watch?v=VxnfIe4zgO0',
    type: ResourceType.Video,
    description: 'A brief overview of the Minoan civilization that also touches on Linear A.',
    tags: ['Minoans', 'History']
  },
  {
    author: 'The Unicode Consortium',
    title: 'Unicode Utilities: UnicodeSet ',
    url: 'https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=[:Script=Linear_A:]',
    type: ResourceType.Website,
    description: 'The complete list of Linear A characters included in the Unicode standard. Unicode allows devices to display characters as text, as long as they have a font that supports the characters.',
    tags: ['Characters']
  },
  {
    author: 'Maurice Pope',
    title: 'The Story of Decipherment: From Egyptian Hieroglyphics to Maya Script',
    url: 'https://www.worldcat.org/title/story-of-decipherment-from-egyptian-hieroglyphics-to-maya-script/oclc/924867262',
    type: ResourceType.Book,
    description: 'This book discusses the decipherment of various ancient scripts, including Linear B.',
    tags: ['Linear B', 'Decipherment']
  },
  {
    author: 'Andrew Robinson',
    title: 'Lost Languages: The Enigma of the World\'s Undeciphered Scripts',
    url: 'https://www.worldcat.org/title/lost-languages-the-enigma-of-the-worlds-undeciphered-scripts/oclc/1014756029',
    type: ResourceType.Book,
    description: 'A lively survery of the world\'s undeciphered scripts, including Linear A. Robinson also devotes a chapter to the Phaistos Disc, a Minoan artifact that may have some connection to Linear A.',
    tags: ['Decipherment', 'Linear B', 'History']
  },
  {
    author: 'UndercoverClassicist',
    title: 'Has there been any real progress in deciphering Linear A Language?',
    url: 'https://www.reddit.com/r/AskHistorians/comments/hwmbxo/has_there_been_any_real_progress_in_deciphering/fz4fy3p/',
    type: ResourceType.Website,
    description: 'Reddit user UndercoverClassicist answers a question about the latest updates in the decipherment of Linear A. They go into great detail on how other scripts have been deciphered, and the reasons for why Linear A will likely not be deciphered anytime soon.',
    tags: ['Decipherment']
  },
  {
    author: 'MIT Technology Review',
    title: 'Machine learning has been used to automatically translate long-lost languages',
    url: 'https://www.technologyreview.com/2019/07/01/65601/machine-learning-has-been-used-to-automatically-translate-long-lost-languages/',
    type: ResourceType.Website,
    description: 'Services like Google Translate use machine learning to translating between modern languages. What if it could be used to decipher ancient scripts? This article describes an effort to put machine learning to the test with Ugaritic and Linear B, two already-deciphered scripts. The results are promising.',
    tags: ['Decipherment', 'Linear B', 'Technology']
  },
  {
    author: 'Mark Cartwright',
    title: 'Minoan Civilization',
    url: 'https://www.ancient.eu/Minoan_Civilization/',
    type: ResourceType.Website,
    description: 'A broad but thorough look at the Minoans and their place in the cosmopolitan world of the Bronze Age. Cartwright also takes a look at their fall in the late second millenium BC.',
    tags: ['Minoans', 'History']
  },
  {
    author: 'James Wright',
    title: 'The Evolution of Writing',
    url: 'https://sites.utexas.edu/dsb/tokens/the-evolution-of-writing/',
    type: ResourceType.Website,
    description: 'A concise, general article on the development of writing. Wright describes the three independent instances of writing\'s invention: the Near East, China, and Mesoamerica. He also covers the trends in written language leading up to the alphabet.',
    tags: ['History']
  },
  {
    author: 'Eric Cline',
    title: '1177 B.C.: When Civilization Collapsed',
    url: 'https://www.youtube.com/watch?v=M4LRHJlijVU',
    type: ResourceType.Video,
    description: 'The Minoan civilization disappears from the historical record during a period known as the Bronze Age Collapse. Eric Cline is a historian and archaeologist who specializes in the era, and here he presents his theories for why this international collapse happened.',
    tags: ['History', 'Minoans']
  }
]

export default resources