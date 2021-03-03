// There's ugly formatting here because I used scripts to generate some of the properties.

import { Character } from './types'

const alphabet: Array<Character> = [
  { name: 'A001', path: `${process.env.PUBLIC_URL}/alphabet/A001.svg`, unicode: 67072 },
  { name: 'A002', path: `${process.env.PUBLIC_URL}/alphabet/A002.svg`, unicode: 67073 },
  { name: 'A003', path: `${process.env.PUBLIC_URL}/alphabet/A003.svg`, unicode: 67074 },
  { name: 'A004', path: `${process.env.PUBLIC_URL}/alphabet/A004.svg`, unicode: 67075 },
  { name: 'A005', path: `${process.env.PUBLIC_URL}/alphabet/A005.svg`, unicode: 67076 },
  { name: 'A006', path: `${process.env.PUBLIC_URL}/alphabet/A006.svg`, unicode: 67077 },
  { name: 'A007', path: `${process.env.PUBLIC_URL}/alphabet/A007.svg`, unicode: 67078 },
  { name: 'A008', path: `${process.env.PUBLIC_URL}/alphabet/A008.svg`, unicode: 67079 },
  { name: 'A009', path: `${process.env.PUBLIC_URL}/alphabet/A009.svg`, unicode: 67080 },
  { name: 'A010', path: `${process.env.PUBLIC_URL}/alphabet/A010.svg`, unicode: 67081 },
  { name: 'A011', path: `${process.env.PUBLIC_URL}/alphabet/A011.svg`, unicode: 67082 },
  { name: 'A013', path: `${process.env.PUBLIC_URL}/alphabet/A013.svg`, unicode: 67083 },
  { name: 'A016', path: `${process.env.PUBLIC_URL}/alphabet/A016.svg`, unicode: 67084 },
  { name: 'A017', path: `${process.env.PUBLIC_URL}/alphabet/A017.svg`, unicode: 67085 },
  { name: 'A020', path: `${process.env.PUBLIC_URL}/alphabet/A020.svg`, unicode: 67086 },
  { name: 'A021', path: `${process.env.PUBLIC_URL}/alphabet/A021.svg`, unicode: 67087 },
  {
    name: 'A021f',
    path: `${process.env.PUBLIC_URL}/alphabet/A021f.svg`,
    unicode: 67088
  },
  {
    name: 'A021m',
    path: `${process.env.PUBLIC_URL}/alphabet/A021m.svg`,
    unicode: 67089
  },
  { name: 'A022', path: `${process.env.PUBLIC_URL}/alphabet/A022.svg`, unicode: 67090 },
  {
    name: 'A022f',
    path: `${process.env.PUBLIC_URL}/alphabet/A022f.svg`,
    unicode: 67091
  },
  {
    name: 'A022m',
    path: `${process.env.PUBLIC_URL}/alphabet/A022m.svg`,
    unicode: 67092
  },
  { name: 'A023', path: `${process.env.PUBLIC_URL}/alphabet/A023.svg`, unicode: 67093 },
  {
    name: 'A023m',
    path: `${process.env.PUBLIC_URL}/alphabet/A023m.svg`,
    unicode: 67094
  },
  { name: 'A024', path: `${process.env.PUBLIC_URL}/alphabet/A024.svg`, unicode: 67095 },
  { name: 'A026', path: `${process.env.PUBLIC_URL}/alphabet/A026.svg`, unicode: 67096 },
  { name: 'A027', path: `${process.env.PUBLIC_URL}/alphabet/A027.svg`, unicode: 67097 },
  { name: 'A028', path: `${process.env.PUBLIC_URL}/alphabet/A028.svg`, unicode: 67098 },
  {
    name: 'A028b',
    path: `${process.env.PUBLIC_URL}/alphabet/A028b.svg`,
    unicode: 67099
  },
  { name: 'A029', path: `${process.env.PUBLIC_URL}/alphabet/A029.svg`, unicode: 67100 },
  { name: 'A030', path: `${process.env.PUBLIC_URL}/alphabet/A030.svg`, unicode: 67101 },
  { name: 'A031', path: `${process.env.PUBLIC_URL}/alphabet/A031.svg`, unicode: 67102 },
  { name: 'A034', path: `${process.env.PUBLIC_URL}/alphabet/A034.svg`, unicode: 67103 },
  { name: 'A037', path: `${process.env.PUBLIC_URL}/alphabet/A037.svg`, unicode: 67104 },
  { name: 'A038', path: `${process.env.PUBLIC_URL}/alphabet/A038.svg`, unicode: 67105 },
  { name: 'A039', path: `${process.env.PUBLIC_URL}/alphabet/A039.svg`, unicode: 67106 },
  { name: 'A040', path: `${process.env.PUBLIC_URL}/alphabet/A040.svg`, unicode: 67107 },
  { name: 'A041', path: `${process.env.PUBLIC_URL}/alphabet/A041.svg`, unicode: 67108 },
  { name: 'A044', path: `${process.env.PUBLIC_URL}/alphabet/A044.svg`, unicode: 67109 },
  { name: 'A045', path: `${process.env.PUBLIC_URL}/alphabet/A045.svg`, unicode: 67110 },
  { name: 'A046', path: `${process.env.PUBLIC_URL}/alphabet/A046.svg`, unicode: 67111 },
  { name: 'A047', path: `${process.env.PUBLIC_URL}/alphabet/A047.svg`, unicode: 67112 },
  { name: 'A049', path: `${process.env.PUBLIC_URL}/alphabet/A049.svg`, unicode: 67114 },
  { name: 'A050', path: `${process.env.PUBLIC_URL}/alphabet/A050.svg`, unicode: 67115 },
  { name: 'A051', path: `${process.env.PUBLIC_URL}/alphabet/A051.svg`, unicode: 67116 },
  { name: 'A053', path: `${process.env.PUBLIC_URL}/alphabet/A053.svg`, unicode: 67117 },
  { name: 'A054', path: `${process.env.PUBLIC_URL}/alphabet/A054.svg`, unicode: 67118 },
  { name: 'A055', path: `${process.env.PUBLIC_URL}/alphabet/A055.svg`, unicode: 67119 },
  { name: 'A056', path: `${process.env.PUBLIC_URL}/alphabet/A056.svg`, unicode: 67120 },
  { name: 'A057', path: `${process.env.PUBLIC_URL}/alphabet/A057.svg`, unicode: 67121 },
  { name: 'A058', path: `${process.env.PUBLIC_URL}/alphabet/A058.svg`, unicode: 67122 },
  { name: 'A059', path: `${process.env.PUBLIC_URL}/alphabet/A059.svg`, unicode: 67123 },
  { name: 'A060', path: `${process.env.PUBLIC_URL}/alphabet/A060.svg`, unicode: 67124 },
  { name: 'A061', path: `${process.env.PUBLIC_URL}/alphabet/A061.svg`, unicode: 67125 },
  { name: 'A065', path: `${process.env.PUBLIC_URL}/alphabet/A065.svg`, unicode: 67126 },
  { name: 'A066', path: `${process.env.PUBLIC_URL}/alphabet/A066.svg`, unicode: 67127 },
  { name: 'A067', path: `${process.env.PUBLIC_URL}/alphabet/A067.svg`, unicode: 67128 },
  { name: 'A069', path: `${process.env.PUBLIC_URL}/alphabet/A069.svg`, unicode: 67129 },
  { name: 'A070', path: `${process.env.PUBLIC_URL}/alphabet/A070.svg`, unicode: 67130 },
  { name: 'A073', path: `${process.env.PUBLIC_URL}/alphabet/A073.svg`, unicode: 67131 },
  { name: 'A074', path: `${process.env.PUBLIC_URL}/alphabet/A074.svg`, unicode: 67132 },
  { name: 'A076', path: `${process.env.PUBLIC_URL}/alphabet/A076.svg`, unicode: 67133 },
  { name: 'A077', path: `${process.env.PUBLIC_URL}/alphabet/A077.svg`, unicode: 67134 },
  { name: 'A078', path: `${process.env.PUBLIC_URL}/alphabet/A078.svg`, unicode: 67135 },
  { name: 'A079', path: `${process.env.PUBLIC_URL}/alphabet/A079.svg`, unicode: 67136 },
  { name: 'A080', path: `${process.env.PUBLIC_URL}/alphabet/A080.svg`, unicode: 67137 },
  { name: 'A081', path: `${process.env.PUBLIC_URL}/alphabet/A081.svg`, unicode: 67138 },
  { name: 'A082', path: `${process.env.PUBLIC_URL}/alphabet/A082.svg`, unicode: 67139 },
  { name: 'A085', path: `${process.env.PUBLIC_URL}/alphabet/A085.svg`, unicode: 67140 },
  { name: 'A086', path: `${process.env.PUBLIC_URL}/alphabet/A086.svg`, unicode: 67141 },
  { name: 'A087', path: `${process.env.PUBLIC_URL}/alphabet/A087.svg`, unicode: 67142 },
  {
    name: 'A100',
    path: `${process.env.PUBLIC_URL}/alphabet/A100.svg`,
    unicode: 67143
  },
  { name: 'A118', path: `${process.env.PUBLIC_URL}/alphabet/A118.svg`, unicode: 67144 },
  { name: 'A120', path: `${process.env.PUBLIC_URL}/alphabet/A120.svg`, unicode: 67145 },
  {
    name: 'A120b',
    path: `${process.env.PUBLIC_URL}/alphabet/A120b.svg`,
    unicode: 67146
  },
  { name: 'A122', path: `${process.env.PUBLIC_URL}/alphabet/A122.svg`, unicode: 67147 },
  { name: 'A123', path: `${process.env.PUBLIC_URL}/alphabet/A123.svg`, unicode: 67148 },
  {
    name: 'A131a',
    path: `${process.env.PUBLIC_URL}/alphabet/A131a.svg`,
    unicode: 67149
  },
  {
    name: 'A131b',
    path: `${process.env.PUBLIC_URL}/alphabet/A131b.svg`,
    unicode: 67150
  },
  {
    name: 'A131c',
    path: `${process.env.PUBLIC_URL}/alphabet/A131c.svg`,
    unicode: 67151
  },
  { name: 'A164', path: `${process.env.PUBLIC_URL}/alphabet/A164.svg`, unicode: 67152 },
  { name: 'A171', path: `${process.env.PUBLIC_URL}/alphabet/A171.svg`, unicode: 67153 },
  { name: 'A180', path: `${process.env.PUBLIC_URL}/alphabet/A180.svg`, unicode: 67154 },
  { name: 'A188', path: `${process.env.PUBLIC_URL}/alphabet/A188.svg`, unicode: 67155 },
  { name: 'A191', path: `${process.env.PUBLIC_URL}/alphabet/A191.svg`, unicode: 67156 },
  {
    name: 'A301',
    path: `${process.env.PUBLIC_URL}/alphabet/A301.svg`,
    unicode: 67157
  },
  {
    name: 'A302',
    path: `${process.env.PUBLIC_URL}/alphabet/A302.svg`,
    unicode: 67158
  },
  {
    name: 'A303',
    path: `${process.env.PUBLIC_URL}/alphabet/A303.svg`,
    unicode: 67159
  },
  {
    name: 'A304',
    path: `${process.env.PUBLIC_URL}/alphabet/A304.svg`,
    unicode: 67160
  },
  {
    name: 'A305',
    path: `${process.env.PUBLIC_URL}/alphabet/A305.svg`,
    unicode: 67161
  },
  {
    name: 'A306',
    path: `${process.env.PUBLIC_URL}/alphabet/A306.svg`,
    unicode: 67162
  },
  {
    name: 'A318',
    path: `${process.env.PUBLIC_URL}/alphabet/A318.svg`,
    unicode: 67178
  },
  {
    name: 'A322',
    path: `${process.env.PUBLIC_URL}/alphabet/A322.svg`,
    unicode: 67182
  },
  {
    name: 'A338',
    path: `${process.env.PUBLIC_URL}/alphabet/A338.svg`,
    unicode: 67198
  },
  {
    name: 'A364',
    path: `${process.env.PUBLIC_URL}/alphabet/A364.svg`,
    unicode: 67224
  }
]

export default alphabet