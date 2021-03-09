import { Character } from './types'

// Guide to the properties here:
// Name: the identifier used by linguists/historians for the character
// Path: points the the SVG in the /public folder
// Unicode: the Unicode identifier for the character
// inLinearB: whether the character appears in Linear B

const characters: Array<Character> = [
  {
    name: 'A001',
    path: `${process.env.PUBLIC_URL}/characters/A001.svg`,
    unicode: 67072,
    inLinearB: true
  },
  {
    name: 'A002',
    path: `${process.env.PUBLIC_URL}/characters/A002.svg`,
    unicode: 67073,
    inLinearB: true
  },
  {
    name: 'A003',
    path: `${process.env.PUBLIC_URL}/characters/A003.svg`,
    unicode: 67074,
    inLinearB: true
  },
  {
    name: 'A004',
    path: `${process.env.PUBLIC_URL}/characters/A004.svg`,
    unicode: 67075,
    inLinearB: false
  },
  {
    name: 'A005',
    path: `${process.env.PUBLIC_URL}/characters/A005.svg`,
    unicode: 67076,
    inLinearB: true
  },
  {
    name: 'A006',
    path: `${process.env.PUBLIC_URL}/characters/A006.svg`,
    unicode: 67077,
    inLinearB: false
  },
  {
    name: 'A007',
    path: `${process.env.PUBLIC_URL}/characters/A007.svg`,
    unicode: 67078,
    inLinearB: true
  },
  {
    name: 'A008',
    path: `${process.env.PUBLIC_URL}/characters/A008.svg`,
    unicode: 67079,
    inLinearB: true
  },
  {
    name: 'A009',
    path: `${process.env.PUBLIC_URL}/characters/A009.svg`,
    unicode: 67080,
    inLinearB: true
  },
  {
    name: 'A010',
    path: `${process.env.PUBLIC_URL}/characters/A010.svg`,
    unicode: 67081,
    inLinearB: true
  },
  {
    name: 'A011',
    path: `${process.env.PUBLIC_URL}/characters/A011.svg`,
    unicode: 67082,
    inLinearB: false
  },
  {
    name: 'A013',
    path: `${process.env.PUBLIC_URL}/characters/A013.svg`,
    unicode: 67083,
    inLinearB: false
  },
  {
    name: 'A016',
    path: `${process.env.PUBLIC_URL}/characters/A016.svg`,
    unicode: 67084,
    inLinearB: false
  },
  {
    name: 'A017',
    path: `${process.env.PUBLIC_URL}/characters/A017.svg`,
    unicode: 67085,
    inLinearB: true
  },
  {
    name: 'A020',
    path: `${process.env.PUBLIC_URL}/characters/A020.svg`,
    unicode: 67086,
    inLinearB: true
  },
  {
    name: 'A021',
    path: `${process.env.PUBLIC_URL}/characters/A021.svg`,
    unicode: 67087,
    inLinearB: false
  },
  {
    name: 'A021f',
    path: `${process.env.PUBLIC_URL}/characters/A021f.svg`,
    unicode: 67088,
    inLinearB: false
  },
  {
    name: 'A021m',
    path: `${process.env.PUBLIC_URL}/characters/A021m.svg`,
    unicode: 67089,
    inLinearB: false
  },
  {
    name: 'A022',
    path: `${process.env.PUBLIC_URL}/characters/A022.svg`,
    unicode: 67090,
    inLinearB: false
  },
  {
    name: 'A022f',
    path: `${process.env.PUBLIC_URL}/characters/A022f.svg`,
    unicode: 67091,
    inLinearB: false
  },
  {
    name: 'A022m',
    path: `${process.env.PUBLIC_URL}/characters/A022m.svg`,
    unicode: 67092,
    inLinearB: false
  },
  {
    name: 'A023',
    path: `${process.env.PUBLIC_URL}/characters/A023.svg`,
    unicode: 67093,
    inLinearB: true
  },
  {
    name: 'A023m',
    path: `${process.env.PUBLIC_URL}/characters/A023m.svg`,
    unicode: 67094,
    inLinearB: false
  },
  {
    name: 'A024',
    path: `${process.env.PUBLIC_URL}/characters/A024.svg`,
    unicode: 67095,
    inLinearB: false
  },
  {
    name: 'A026',
    path: `${process.env.PUBLIC_URL}/characters/A026.svg`,
    unicode: 67096,
    inLinearB: false
  },
  {
    name: 'A027',
    path: `${process.env.PUBLIC_URL}/characters/A027.svg`,
    unicode: 67097,
    inLinearB: true
  },
  {
    name: 'A028',
    path: `${process.env.PUBLIC_URL}/characters/A028.svg`,
    unicode: 67098,
    inLinearB: false
  },
  {
    name: 'A028b',
    path: `${process.env.PUBLIC_URL}/characters/A028b.svg`,
    unicode: 67099,
    inLinearB: false
  },
  {
    name: 'A029',
    path: `${process.env.PUBLIC_URL}/characters/A029.svg`,
    unicode: 67100,
    inLinearB: false
  },
  {
    name: 'A030',
    path: `${process.env.PUBLIC_URL}/characters/A030.svg`,
    unicode: 67101,
    inLinearB: false
  },
  {
    name: 'A031',
    path: `${process.env.PUBLIC_URL}/characters/A031.svg`,
    unicode: 67102,
    inLinearB: false
  },
  {
    name: 'A034',
    path: `${process.env.PUBLIC_URL}/characters/A034.svg`,
    unicode: 67103,
    inLinearB: false
  },
  {
    name: 'A037',
    path: `${process.env.PUBLIC_URL}/characters/A037.svg`,
    unicode: 67104,
    inLinearB: false
  },
  {
    name: 'A038',
    path: `${process.env.PUBLIC_URL}/characters/A038.svg`,
    unicode: 67105,
    inLinearB: false
  },
  {
    name: 'A039',
    path: `${process.env.PUBLIC_URL}/characters/A039.svg`,
    unicode: 67106,
    inLinearB: false
  },
  {
    name: 'A040',
    path: `${process.env.PUBLIC_URL}/characters/A040.svg`,
    unicode: 67107,
    inLinearB: false
  },
  {
    name: 'A041',
    path: `${process.env.PUBLIC_URL}/characters/A041.svg`,
    unicode: 67108,
    inLinearB: false
  },
  {
    name: 'A044',
    path: `${process.env.PUBLIC_URL}/characters/A044.svg`,
    unicode: 67109,
    inLinearB: false
  },
  {
    name: 'A045',
    path: `${process.env.PUBLIC_URL}/characters/A045.svg`,
    unicode: 67110,
    inLinearB: false
  },
  {
    name: 'A046',
    path: `${process.env.PUBLIC_URL}/characters/A046.svg`,
    unicode: 67111,
    inLinearB: false
  },
  {
    name: 'A047',
    path: `${process.env.PUBLIC_URL}/characters/A047.svg`,
    unicode: 67112,
    inLinearB: false
  },
  {
    name: 'A049',
    path: `${process.env.PUBLIC_URL}/characters/A049.svg`,
    unicode: 67114,
    inLinearB: false
  },
  {
    name: 'A050',
    path: `${process.env.PUBLIC_URL}/characters/A050.svg`,
    unicode: 67115,
    inLinearB: true
  },
  {
    name: 'A051',
    path: `${process.env.PUBLIC_URL}/characters/A051.svg`,
    unicode: 67116,
    inLinearB: false
  },
  {
    name: 'A053',
    path: `${process.env.PUBLIC_URL}/characters/A053.svg`,
    unicode: 67117,
    inLinearB: false
  },
  {
    name: 'A054',
    path: `${process.env.PUBLIC_URL}/characters/A054.svg`,
    unicode: 67118,
    inLinearB: true
  },
  {
    name: 'A055',
    path: `${process.env.PUBLIC_URL}/characters/A055.svg`,
    unicode: 67119,
    inLinearB: false
  },
  {
    name: 'A056',
    path: `${process.env.PUBLIC_URL}/characters/A056.svg`,
    unicode: 67120,
    inLinearB: false
  },
  {
    name: 'A057',
    path: `${process.env.PUBLIC_URL}/characters/A057.svg`,
    unicode: 67121,
    inLinearB: true
  },
  {
    name: 'A058',
    path: `${process.env.PUBLIC_URL}/characters/A058.svg`,
    unicode: 67122,
    inLinearB: true
  },
  {
    name: 'A059',
    path: `${process.env.PUBLIC_URL}/characters/A059.svg`,
    unicode: 67123,
    inLinearB: true
  },
  {
    name: 'A060',
    path: `${process.env.PUBLIC_URL}/characters/A060.svg`,
    unicode: 67124,
    inLinearB: true
  },
  {
    name: 'A061',
    path: `${process.env.PUBLIC_URL}/characters/A061.svg`,
    unicode: 67125,
    inLinearB: false
  },
  {
    name: 'A065',
    path: `${process.env.PUBLIC_URL}/characters/A065.svg`,
    unicode: 67126,
    inLinearB: false
  },
  {
    name: 'A066',
    path: `${process.env.PUBLIC_URL}/characters/A066.svg`,
    unicode: 67127,
    inLinearB: false
  },
  {
    name: 'A067',
    path: `${process.env.PUBLIC_URL}/characters/A067.svg`,
    unicode: 67128,
    inLinearB: false
  },
  {
    name: 'A069',
    path: `${process.env.PUBLIC_URL}/characters/A069.svg`,
    unicode: 67129,
    inLinearB: false
  },
  {
    name: 'A070',
    path: `${process.env.PUBLIC_URL}/characters/A070.svg`,
    unicode: 67130,
    inLinearB: true
  },
  {
    name: 'A073',
    path: `${process.env.PUBLIC_URL}/characters/A073.svg`,
    unicode: 67131,
    inLinearB: true
  },
  {
    name: 'A074',
    path: `${process.env.PUBLIC_URL}/characters/A074.svg`,
    unicode: 67132,
    inLinearB: true
  },
  {
    name: 'A076',
    path: `${process.env.PUBLIC_URL}/characters/A076.svg`,
    unicode: 67133,
    inLinearB: false
  },
  {
    name: 'A077',
    path: `${process.env.PUBLIC_URL}/characters/A077.svg`,
    unicode: 67134,
    inLinearB: true
  },
  {
    name: 'A078',
    path: `${process.env.PUBLIC_URL}/characters/A078.svg`,
    unicode: 67135,
    inLinearB: true
  },
  {
    name: 'A079',
    path: `${process.env.PUBLIC_URL}/characters/A079.svg`,
    unicode: 67136,
    inLinearB: false
  },
  {
    name: 'A080',
    path: `${process.env.PUBLIC_URL}/characters/A080.svg`,
    unicode: 67137,
    inLinearB: false
  },
  {
    name: 'A081',
    path: `${process.env.PUBLIC_URL}/characters/A081.svg`,
    unicode: 67138,
    inLinearB: false
  },
  {
    name: 'A082',
    path: `${process.env.PUBLIC_URL}/characters/A082.svg`,
    unicode: 67139,
    inLinearB: false
  },
  {
    name: 'A085',
    path: `${process.env.PUBLIC_URL}/characters/A085.svg`,
    unicode: 67140,
    inLinearB: false
  },
  {
    name: 'A086',
    path: `${process.env.PUBLIC_URL}/characters/A086.svg`,
    unicode: 67141,
    inLinearB: false
  },
  {
    name: 'A087',
    path: `${process.env.PUBLIC_URL}/characters/A087.svg`,
    unicode: 67142,
    inLinearB: false
  },
  {
    name: 'A100',
    path: `${process.env.PUBLIC_URL}/characters/A100.svg`,
    unicode: 67143,
    inLinearB: false
  },
  {
    name: 'A118',
    path: `${process.env.PUBLIC_URL}/characters/A118.svg`,
    unicode: 67144,
    inLinearB: false
  },
  {
    name: 'A120',
    path: `${process.env.PUBLIC_URL}/characters/A120.svg`,
    unicode: 67145,
    inLinearB: false
  },
  {
    name: 'A120b',
    path: `${process.env.PUBLIC_URL}/characters/A120b.svg`,
    unicode: 67146,
    inLinearB: true
  },
  {
    name: 'A122',
    path: `${process.env.PUBLIC_URL}/characters/A122.svg`,
    unicode: 67147,
    inLinearB: false
  },
  {
    name: 'A123',
    path: `${process.env.PUBLIC_URL}/characters/A123.svg`,
    unicode: 67148,
    inLinearB: false
  },
  {
    name: 'A131a',
    path: `${process.env.PUBLIC_URL}/characters/A131a.svg`,
    unicode: 67149,
    inLinearB: false
  },
  {
    name: 'A131b',
    path: `${process.env.PUBLIC_URL}/characters/A131b.svg`,
    unicode: 67150,
    inLinearB: false
  },
  {
    name: 'A131c',
    path: `${process.env.PUBLIC_URL}/characters/A131c.svg`,
    unicode: 67151,
    inLinearB: false
  },
  {
    name: 'A164',
    path: `${process.env.PUBLIC_URL}/characters/A164.svg`,
    unicode: 67152,
    inLinearB: false
  },
  {
    name: 'A171',
    path: `${process.env.PUBLIC_URL}/characters/A171.svg`,
    unicode: 67153,
    inLinearB: false
  },
  {
    name: 'A180',
    path: `${process.env.PUBLIC_URL}/characters/A180.svg`,
    unicode: 67154,
    inLinearB: false
  },
  {
    name: 'A188',
    path: `${process.env.PUBLIC_URL}/characters/A188.svg`,
    unicode: 67155,
    inLinearB: false
  },
  {
    name: 'A191',
    path: `${process.env.PUBLIC_URL}/characters/A191.svg`,
    unicode: 67156,
    inLinearB: false
  },
  {
    name: 'A301',
    path: `${process.env.PUBLIC_URL}/characters/A301.svg`,
    unicode: 67157,
    inLinearB: false
  },
  {
    name: 'A302',
    path: `${process.env.PUBLIC_URL}/characters/A302.svg`,
    unicode: 67158,
    inLinearB: false
  },
  {
    name: 'A303',
    path: `${process.env.PUBLIC_URL}/characters/A303.svg`,
    unicode: 67159,
    inLinearB: false
  },
  {
    name: 'A304',
    path: `${process.env.PUBLIC_URL}/characters/A304.svg`,
    unicode: 67160,
    inLinearB: false
  },
  {
    name: 'A305',
    path: `${process.env.PUBLIC_URL}/characters/A305.svg`,
    unicode: 67161,
    inLinearB: false
  },
  {
    name: 'A306',
    path: `${process.env.PUBLIC_URL}/characters/A306.svg`,
    unicode: 67162,
    inLinearB: false
  },
  {
    name: 'A318',
    path: `${process.env.PUBLIC_URL}/characters/A318.svg`,
    unicode: 67178,
    inLinearB: false
  },
  {
    name: 'A322',
    path: `${process.env.PUBLIC_URL}/characters/A322.svg`,
    unicode: 67182,
    inLinearB: false
  },
  {
    name: 'A338',
    path: `${process.env.PUBLIC_URL}/characters/A338.svg`,
    unicode: 67198,
    inLinearB: false
  },
  {
    name: 'A364',
    path: `${process.env.PUBLIC_URL}/characters/A364.svg`,
    unicode: 67224,
    inLinearB: false
  }
]

export default characters