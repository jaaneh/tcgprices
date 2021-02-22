import { cleanName } from './helpers'

/**
 * Get set id from from modified name.
 * @param name Set name after ran through cleanName function.
 * @returns Set id
 */
export function getPokemonSetId(name: string): number {
  return pokemonSets[name].id
}

/**
 * Get original display name from modified name.
 * @param name Set name after ran through cleanName function.
 * @returns Original display name.
 */
export function getPokemonSetDisplayName(name: string): string {
  return pokemonSets[name].name
}

export function createPokemonSetName(name: string): string {
  let newName: string = name
  const setId: string = pokemonSets[name].id
  const setName: string = pokemonSets[name].name

  if (!name.startsWith(setId)) {
    newName = cleanName(`${setId}-${setName}`)
  }

  return newName
}

const pokemonSetIds = {
  'swsh05-battle-styles': {
    displayName: 'SWSH05: Battle Styles',
    abbreviation: 'SWSH05',
    setId: 2765
  },
  'first-partner-pack': {
    displayName: 'First Partner Pack',
    abbreviation: 'FPP',
    setId: 2776
  },
  'shining-fates': {
    displayName: 'Shining Fates',
    abbreviation: '',
    setId: 2754
  },
  'shining-fates-shiny-vault': {
    displayName: 'Shining Fates: Shiny Vault',
    abbreviation: 'SFSV',
    setId: 2781
  },
  'swsh04-vivid-voltage': {
    displayName: 'SWSH04: Vivid Voltage',
    abbreviation: 'SWSH04',
    setId: 2701
  },
  'champions-path': {
    displayName: "Champion's Path",
    abbreviation: 'CHP',
    setId: 2685
  },
  'swsh03-darkness-ablaze': {
    displayName: 'SWSH03: Darkness Ablaze',
    abbreviation: 'SWSH03',
    setId: 2675
  },
  'battle-academy': {
    abbreviation: 'BTA',
    displayName: 'Battle Academy',
    setId: 2686
  },
  'swsh02-rebel-clash': {
    abbreviation: 'SWSH02',
    displayName: 'SWSH02: Rebel Clash',
    setId: 2626
  },
  'swsh01-sword-shield-base-set': {
    abbreviation: 'SWSH01',
    displayName: 'SWSH01: Sword & Shield Base Set',
    setId: 2585
  },
  'swsh-sword-shield-promo-cards': {
    abbreviation: 'SWSD',
    displayName: 'SWSH: Sword & Shield Promo Cards',
    setId: 2545
  },
  'sm-cosmic-eclipse': {
    abbreviation: 'SM12',
    displayName: 'SM - Cosmic Eclipse',
    setId: 2534
  },
  'mcdonalds-promos-2019': {
    abbreviation: 'MCD19',
    displayName: "McDonald's Promos 2019",
    setId: 2555
  },
  'hidden-fates': {
    abbreviation: 'HIF',
    displayName: 'Hidden Fates',
    setId: 2480
  },
  'hidden-fates-shiny-vault': {
    abbreviation: 'HIF:SV',
    displayName: 'Hidden Fates: Shiny Vault',
    setId: 2594
  },
  'sm-unified-minds': {
    abbreviation: 'SM11',
    displayName: 'SM - Unified Minds',
    setId: 2464
  },
  'sm-unbroken-bonds': {
    abbreviation: 'SM10',
    displayName: 'SM - Unbroken Bonds',
    setId: 2420
  },
  'detective-pikachu': {
    abbreviation: 'DEP',
    displayName: 'Detective Pikachu',
    setId: 2409
  },
  'sm-team-up': {
    abbreviation: 'SM9',
    displayName: 'SM - Team Up',
    setId: 2377
  },
  'sm-lost-thunder': {
    abbreviation: 'SM8',
    displayName: 'SM - Lost Thunder',
    setId: 2328
  },
  'mcdonalds-promos-2018': {
    abbreviation: 'MCD18',
    displayName: "McDonald's Promos 2018",
    setId: 2364
  },
  'mcdonalds-25th-anniversary-promos': {
    abbreviation: 'MCD21',
    displayName: "McDonald's 25th Anniversary Promos",
    setId: 2782
  },
  'miscellaneous-cards-products': {
    abbreviation: 'MCAP',
    displayName: 'Miscellaneous Cards & Products',
    setId: 2374
  },
  'dragon-majesty': {
    abbreviation: 'DRM',
    displayName: 'Dragon Majesty',
    setId: 2295
  },
  'sm-celestial-storm': {
    abbreviation: 'CES',
    displayName: 'SM - Celestial Storm',
    setId: 2278
  },
  'world-championship-decks': {
    abbreviation: 'WCD',
    displayName: 'World Championship Decks',
    setId: 2282
  },
  'sm-forbidden-light': {
    abbreviation: 'SM06',
    displayName: 'SM - Forbidden Light',
    setId: 2209
  },
  'sm-trainer-kit-alolan-sandslash-alolan-ninetales': {
    abbreviation: 'SMK2',
    displayName: 'SM Trainer Kit: Alolan Sandslash & Alolan Ninetales',
    setId: 2208
  },
  'sm-ultra-prism': {
    abbreviation: 'SM05',
    displayName: 'SM - Ultra Prism',
    setId: 2178
  },
  'mcdonalds-promos-2017': {
    abbreviation: 'MCD17',
    displayName: "McDonald's Promos 2017",
    setId: 2148
  },
  'sm-crimson-invasion': {
    abbreviation: 'SM04',
    displayName: 'SM - Crimson Invasion',
    setId: 2071
  },
  'shining-legends': {
    abbreviation: 'SHL',
    displayName: 'Shining Legends',
    setId: 2054
  },
  'sm-burning-shadows': {
    abbreviation: 'SM03',
    displayName: 'SM - Burning Shadows',
    setId: 1957
  },
  'alternate-art-promos': {
    abbreviation: 'PR',
    displayName: 'Alternate Art Promos',
    setId: 1938
  },
  'sm-guardians-rising': {
    abbreviation: 'SM02',
    displayName: 'SM - Guardians Rising',
    setId: 1919
  },
  'sm-trainer-kit-lycanroc-alolan-raichu': {
    abbreviation: 'SMK1',
    displayName: 'SM Trainer Kit: Lycanroc & Alolan Raichu',
    setId: 2069
  },
  'sm-base-set': {
    abbreviation: 'SM01',
    displayName: 'SM Base Set',
    setId: 1863
  },
  'sm-promos': {
    abbreviation: 'SMP',
    displayName: 'SM Promos',
    setId: 1861
  },
  'xy-evolutions': {
    abbreviation: 'EVO',
    displayName: 'XY - Evolutions',
    setId: 1842
  },
  'deck-exclusives': {
    abbreviation: 'PR',
    displayName: 'Deck Exclusives',
    setId: 1840
  },
  'xy-steam-siege': {
    abbreviation: 'STS',
    displayName: 'XY - Steam Siege',
    setId: 1815
  },
  'league-championship-cards': {
    abbreviation: 'PR',
    displayName: 'League & Championship Cards',
    setId: 1539
  },
  'xy-fates-collide': {
    abbreviation: 'FCO',
    displayName: 'XY - Fates Collide',
    setId: 1780
  },
  'xy-trainer-kit-pikachu-libre-suicune': {
    abbreviation: 'PR',
    displayName: 'XY Trainer Kit: Pikachu Libre & Suicune',
    setId: 1796
  },
  generations: {
    abbreviation: 'GEN',
    displayName: 'Generations',
    setId: 1728
  },
  'generations-radiant-collection': {
    abbreviation: 'GEN',
    displayName: 'Generations: Radiant Collection',
    setId: 1729
  },
  'xy-breakpoint': {
    abbreviation: 'BKP',
    displayName: 'XY - BREAKpoint',
    setId: 1701
  },
  'mcdonalds-promos-2015': {
    abbreviation: 'MCD15',
    displayName: "McDonald's Promos 2015",
    setId: 1694
  },
  'xy-breakthrough': {
    abbreviation: 'BKT',
    displayName: 'XY - BREAKthrough',
    setId: 1661
  },
  'xy-ancient-origins': {
    abbreviation: 'AOR',
    displayName: 'XY - Ancient Origins',
    setId: 1576
  },
  'xy-roaring-skies': {
    abbreviation: 'ROS',
    displayName: 'XY - Roaring Skies',
    setId: 1534
  },
  'xy-trainer-kit-latias-latios': {
    abbreviation: 'PR',
    displayName: 'XY Trainer Kit: Latias & Latios',
    setId: 1536
  },
  'jumbo-cards': {
    abbreviation: 'PR',
    displayName: 'Jumbo Cards',
    setId: 1528
  },
  'double-crisis': {
    abbreviation: 'DCR',
    displayName: 'Double Crisis',
    setId: 1525
  },
  'xy-primal-clash': {
    abbreviation: 'PRC',
    displayName: 'XY - Primal Clash',
    setId: 1509
  },
  'xy-trainer-kit-bisharp-wigglytuff': {
    abbreviation: 'PR',
    displayName: 'XY Trainer Kit: Bisharp & Wigglytuff',
    setId: 1533
  },
  'xy-phantom-forces': {
    abbreviation: 'PHF',
    displayName: 'XY - Phantom Forces',
    setId: 1494
  },
  'xy-furious-fists': {
    abbreviation: 'FFI',
    displayName: 'XY - Furious Fists',
    setId: 1481
  },
  'mcdonalds-promos-2014': {
    abbreviation: 'MCD14',
    displayName: "McDonald's Promos 2014",
    setId: 1692
  },
  'xy-flashfire': {
    abbreviation: 'FLF',
    displayName: 'XY - Flashfire',
    setId: 1464
  },
  'xy-trainer-kit-sylveon-noivern': {
    abbreviation: 'PR',
    displayName: 'XY Trainer Kit: Sylveon & Noivern',
    setId: 1532
  },
  'xy-base-set': {
    abbreviation: 'XY',
    displayName: 'XY Base Set',
    setId: 1387
  },
  'xy-promos': {
    abbreviation: 'PR',
    displayName: 'XY Promos',
    setId: 1451
  },
  'legendary-treasures': {
    abbreviation: 'LTR',
    displayName: 'Legendary Treasures',
    setId: 1409
  },
  'legendary-treasures-radiant-collection': {
    abbreviation: 'LTR',
    displayName: 'Legendary Treasures: Radiant Collection',
    setId: 1465
  },
  'plasma-blast': {
    abbreviation: 'PLB',
    displayName: 'Plasma Blast',
    setId: 1370
  },
  'plasma-freeze': {
    abbreviation: 'PLF',
    displayName: 'Plasma Freeze',
    setId: 1382
  },
  'plasma-storm': {
    abbreviation: 'PLS',
    displayName: 'Plasma Storm',
    setId: 1413
  },
  'boundaries-crossed': {
    abbreviation: 'BCR',
    displayName: 'Boundaries Crossed',
    setId: 1408
  },
  'dragons-exalted': {
    abbreviation: 'DRX',
    displayName: 'Dragons Exalted',
    setId: 1394
  },
  'dark-explorers': {
    abbreviation: 'DEX',
    displayName: 'Dark Explorers',
    setId: 1386
  },
  'noble-victories': {
    abbreviation: 'NVI',
    displayName: 'Noble Victories',
    setId: 1385
  },
  'bw-trainer-kit-excadrill-zoroark': {
    abbreviation: 'BLW',
    displayName: 'BW Trainer Kit: Excadrill & Zoroark',
    setId: 1538
  },
  'emerging-powers': {
    abbreviation: 'EPO',
    displayName: 'Emerging Powers',
    setId: 1424
  },
  'black-and-white': {
    abbreviation: 'BLW',
    displayName: 'Black and White',
    setId: 1400
  },
  'call-of-legends': {
    abbreviation: 'CL',
    displayName: 'Call of Legends',
    setId: 1415
  },
  'professor-program-promos': {
    abbreviation: 'PPP',
    displayName: 'Professor Program Promos',
    setId: 2332
  },
  triumphant: {
    abbreviation: 'TM',
    displayName: 'Triumphant',
    setId: 1381
  },
  undaunted: {
    abbreviation: 'UD',
    displayName: 'Undaunted',
    setId: 1403
  },
  'pikachu-world-collection-promos': {
    abbreviation: 'PWCP',
    displayName: 'Pikachu World Collection Promos',
    setId: 2205
  },
  unleashed: {
    abbreviation: 'UL',
    displayName: 'Unleashed',
    setId: 1399
  },
  'hgss-promos': {
    abbreviation: 'PR',
    displayName: 'HGSS Promos',
    setId: 1453
  },
  arceus: {
    abbreviation: 'AR',
    displayName: 'Arceus',
    setId: 1391
  },
  'supreme-victors': {
    abbreviation: 'SV',
    displayName: 'Supreme Victors',
    setId: 1384
  },
  'burger-king-promos': {
    abbreviation: 'BKP',
    displayName: 'Burger King Promos',
    setId: 2175
  },
  'countdown-calendar-promos': {
    abbreviation: 'CCP',
    displayName: 'Countdown Calendar Promos',
    setId: 2155
  },
  'legends-awakened': {
    abbreviation: 'LA',
    displayName: 'Legends Awakened',
    setId: 1417
  },
  'great-encounters': {
    abbreviation: 'GE',
    displayName: 'Great Encounters',
    setId: 1405
  },
  'dp-trainer-kit-manaphy-lucario': {
    abbreviation: 'PR',
    displayName: 'DP Trainer Kit: Manaphy & Lucario',
    setId: 1541
  },
  'diamond-and-pearl': {
    abbreviation: 'DP',
    displayName: 'Diamond and Pearl',
    setId: 1430
  },
  'diamond-and-pearl-promos': {
    abbreviation: 'PR',
    displayName: 'Diamond and Pearl Promos',
    setId: 1421
  },
  'dragon-frontiers': {
    abbreviation: 'DF',
    displayName: 'Dragon Frontiers',
    setId: 1411
  },
  'crystal-guardians': {
    abbreviation: 'CG',
    displayName: 'Crystal Guardians',
    setId: 1395
  },
  'delta-species': {
    abbreviation: 'DS',
    displayName: 'Delta Species',
    setId: 1429
  },
  'unseen-forces': {
    abbreviation: 'UF',
    displayName: 'Unseen Forces',
    setId: 1398
  },
  emerald: {
    abbreviation: 'EM',
    displayName: 'Emerald',
    setId: 1410
  },
  deoxys: {
    abbreviation: 'DX',
    displayName: 'Deoxys',
    setId: 1404
  },
  'ex-battle-stadium': {
    abbreviation: 'BST',
    displayName: 'EX Battle Stadium',
    setId: 1853
  },
  'kids-wb-promos': {
    abbreviation: 'KWBP',
    displayName: 'Kids WB Promos',
    setId: 2214
  },
  'team-magma-vs-team-aqua': {
    abbreviation: 'MA',
    displayName: 'Team Magma vs Team Aqua',
    setId: 1377
  },
  dragon: {
    abbreviation: 'DR',
    displayName: 'Dragon',
    setId: 1376
  },
  aquapolis: {
    abbreviation: 'AQ',
    displayName: 'Aquapolis',
    setId: 1397
  },
  'best-of-promos': {
    abbreviation: 'PR',
    displayName: 'Best of Promos',
    setId: 1455
  },
  'team-rocket': {
    abbreviation: 'TR',
    displayName: 'Team Rocket',
    setId: 1373
  },
  fossil: {
    abbreviation: 'FO',
    displayName: 'Fossil',
    setId: 630
  },
  'wotc-promo': {
    abbreviation: 'PR',
    displayName: 'WoTC Promo',
    setId: 1418
  },
  'blister-exclusives': {
    abbreviation: 'BLE',
    displayName: 'Blister Exclusives',
    setId: 2289
  },
  'base-set': {
    abbreviation: 'BS',
    displayName: 'Base Set',
    setId: 604
  },
  'base-set-shadowless': {
    abbreviation: 'BS',
    displayName: 'Base Set (Shadowless)',
    setId: 1663
  },
  'base-set-2': {
    abbreviation: 'B2',
    displayName: 'Base Set 2',
    setId: 605
  },
  'black-and-white-promos': {
    abbreviation: 'PR',
    displayName: 'Black and White Promos',
    setId: 1407
  },
  'dp-training-kit-1-blue': {
    abbreviation: 'PR',
    displayName: 'DP Training Kit 1 Blue',
    setId: 609
  },
  'dp-training-kit-1-gold': {
    abbreviation: 'PR',
    displayName: 'DP Training Kit 1 Gold',
    setId: 610
  },
  'dragon-vault': {
    abbreviation: 'DRV',
    displayName: 'Dragon Vault',
    setId: 1426
  },
  'ex-trainer-kit-1-latias-latios': {
    abbreviation: 'PR',
    displayName: 'EX Trainer Kit 1: Latias & Latios',
    setId: 1543
  },
  'ex-trainer-kit-2-plusle-minun': {
    abbreviation: 'PR',
    displayName: 'EX Trainer Kit 2: Plusle & Minun',
    setId: 1542
  },
  expedition: {
    abbreviation: 'EX',
    displayName: 'Expedition',
    setId: 1375
  },
  'firered-leafgreen': {
    abbreviation: 'RG',
    displayName: 'FireRed & LeafGreen',
    setId: 1419
  },
  'gym-challenge': {
    abbreviation: 'G2',
    displayName: 'Gym Challenge',
    setId: 1440
  },
  'gym-heroes': {
    abbreviation: 'G1',
    displayName: 'Gym Heroes',
    setId: 1441
  },
  'heartgold-soulsilver': {
    abbreviation: 'HS',
    displayName: 'HeartGold SoulSilver',
    setId: 1402
  },
  'hgss-trainer-kit-gyarados-raichu': {
    abbreviation: 'PR',
    displayName: 'HGSS Trainer Kit: Gyarados & Raichu',
    setId: 1540
  },
  'hidden-legends': {
    abbreviation: 'HL',
    displayName: 'Hidden Legends',
    setId: 1416
  },
  'holon-phantoms': {
    abbreviation: 'HP',
    displayName: 'Holon Phantoms',
    setId: 1379
  },
  jungle: {
    abbreviation: 'JU',
    displayName: 'Jungle',
    setId: 635
  },
  'kalos-starter-set': {
    abbreviation: 'KSS',
    displayName: 'Kalos Starter Set',
    setId: 1522
  },
  'legend-maker': {
    abbreviation: 'LM',
    displayName: 'Legend Maker',
    setId: 1378
  },
  'legendary-collection': {
    abbreviation: 'LC',
    displayName: 'Legendary Collection',
    setId: 1374
  },
  'majestic-dawn': {
    abbreviation: 'MD',
    displayName: 'Majestic Dawn',
    setId: 1390
  },
  'mcdonalds-promos-2011': {
    abbreviation: '',
    displayName: "McDonald's Promos 2011",
    setId: 1401
  },
  'mcdonalds-promos-2012': {
    abbreviation: '',
    displayName: "McDonald's Promos 2012",
    setId: 1427
  },
  'mysterious-treasures': {
    abbreviation: 'MT',
    displayName: 'Mysterious Treasures',
    setId: 1368
  },
  'neo-destiny': {
    abbreviation: 'N4',
    displayName: 'Neo Destiny',
    setId: 1444
  },
  'neo-discovery': {
    abbreviation: 'N2',
    displayName: 'Neo Discovery',
    setId: 1434
  },
  'neo-genesis': {
    abbreviation: 'N1',
    displayName: 'Neo Genesis',
    setId: 1396
  },
  'neo-revelation': {
    abbreviation: 'N3',
    displayName: 'Neo Revelation',
    setId: 1389
  },
  'next-destinies': {
    abbreviation: 'NXD',
    displayName: 'Next Destinies',
    setId: 1412
  },
  'nintendo-promos': {
    abbreviation: 'PR',
    displayName: 'Nintendo Promos',
    setId: 1423
  },
  platinum: {
    abbreviation: 'PL',
    displayName: 'Platinum',
    setId: 1406
  },
  'pop-series-1': {
    abbreviation: 'POP',
    displayName: 'POP Series 1',
    setId: 1422
  },
  'pop-series-2': {
    abbreviation: 'POP',
    displayName: 'POP Series 2',
    setId: 1447
  },
  'pop-series-3': {
    abbreviation: 'POP',
    displayName: 'POP Series 3',
    setId: 1442
  },
  'pop-series-4': {
    abbreviation: 'POP',
    displayName: 'POP Series 4',
    setId: 1452
  },
  'pop-series-5': {
    abbreviation: 'POP',
    displayName: 'POP Series 5',
    setId: 1439
  },
  'pop-series-6': {
    abbreviation: 'POP',
    displayName: 'POP Series 6',
    setId: 1432
  },
  'pop-series-7': {
    abbreviation: 'POP',
    displayName: 'POP Series 7',
    setId: 1414
  },
  'pop-series-8': {
    abbreviation: 'POP',
    displayName: 'POP Series 8',
    setId: 1450
  },
  'pop-series-9': {
    abbreviation: 'POP',
    displayName: 'POP Series 9',
    setId: 1446
  },
  'power-keepers': {
    abbreviation: 'PK',
    displayName: 'Power Keepers',
    setId: 1383
  },
  'rising-rivals': {
    abbreviation: 'RR',
    displayName: 'Rising Rivals',
    setId: 1367
  },
  'ruby-and-sapphire': {
    abbreviation: 'RS',
    displayName: 'Ruby and Sapphire',
    setId: 1393
  },
  rumble: {
    abbreviation: '',
    displayName: 'Rumble',
    setId: 1433
  },
  sandstorm: {
    abbreviation: 'SS',
    displayName: 'Sandstorm',
    setId: 1392
  },
  'secret-wonders': {
    abbreviation: 'SW',
    displayName: 'Secret Wonders',
    setId: 1380
  },
  skyridge: {
    abbreviation: 'SK',
    displayName: 'Skyridge',
    setId: 1372
  },
  'southern-islands': {
    abbreviation: 'SI',
    displayName: 'Southern Islands',
    setId: 648
  },
  stormfront: {
    abbreviation: 'SF',
    displayName: 'Stormfront',
    setId: 1369
  },
  'team-rocket-returns': {
    abbreviation: 'RR',
    displayName: 'Team Rocket Returns',
    setId: 1428
  }
}

const setIds = [
  'base1',
  'base2',
  'basep',
  'base3',
  'base4',
  'base5',
  'gym1',
  'gym2',
  'neo1',
  'neo2',
  'si1',
  'neo3',
  'neo4',
  'base6',
  'ecard1',
  'ecard2',
  'ecard3',
  'ex1',
  'ex2',
  'ex3',
  'np',
  'ex4',
  'ex5',
  'ex6',
  'pop1',
  'ex7',
  'ex8',
  'ex9',
  'ex10',
  'pop2',
  'ex11',
  'ex12',
  'pop3',
  'ex13',
  'ex14',
  'pop4',
  'ex15',
  'pop5',
  'ex16',
  'dp1',
  'dpp',
  'dp2',
  'pop6',
  'dp3',
  'dp4',
  'pop7',
  'dp5',
  'dp6',
  'pop8',
  'dp7',
  'pl1',
  'pop9',
  'pl2',
  'pl3',
  'pl4',
  'ru1',
  'hgss1',
  'hsp',
  'hgss2',
  'hgss3',
  'hgss4',
  'col1',
  'bwp',
  'bw1',
  'bw2',
  'bw3',
  'bw4',
  'bw5',
  'bw6',
  'dv1',
  'bw7',
  'bw8',
  'bw9',
  'bw10',
  'xyp',
  'bw11',
  'xy0',
  'xy1',
  'xy2',
  'xy3',
  'xy4',
  'xy5',
  'dc1',
  'xy6',
  'xy7',
  'xy8',
  'xy9',
  'g1',
  'xy10',
  'xy11',
  'xy12',
  'sm1',
  'smp',
  'sm2',
  'sm3',
  'sm35',
  'sm4',
  'sm5',
  'sm6',
  'sm7',
  'sm75',
  'sm8',
  'sm9',
  'det1',
  'sm10',
  'sm11',
  'sm115',
  'sma',
  'sm12',
  'swsh1',
  'swsh2',
  'swsh3',
  'swsh35',
  'swshp',
  'swsh4',
  'mcd11',
  'mcd12',
  'mcd16'
]

const pokemonSetsOld = {
  base: { id: 'base1', name: 'Base' },
  jungle: { id: 'base2', name: 'Jungle' },
  'wizards-black-star-promos': {
    id: 'basep',
    name: 'Wizards Black Star Promos'
  },
  fossil: { id: 'base3', name: 'Fossil' },
  'base-set-2': { id: 'base4', name: 'Base Set 2' },
  'team-rocket': { id: 'base5', name: 'Team Rocket' },
  'gym-heroes': { id: 'gym1', name: 'Gym Heroes' },
  'gym-challenge': { id: 'gym2', name: 'Gym Challenge' },
  'neo-genesis': { id: 'neo1', name: 'Neo Genesis' },
  'neo-discovery': { id: 'neo2', name: 'Neo Discovery' },
  'southern-islands': { id: 'si1', name: 'Southern Islands' },
  'neo-revelation': { id: 'neo3', name: 'Neo Revelation' },
  'neo-destiny': { id: 'neo4', name: 'Neo Destiny' },
  'legendary-collection': { id: 'base6', name: 'Legendary Collection' },
  'expedition-base-set': { id: 'ecard1', name: 'Expedition Base Set' },
  aquapolis: { id: 'ecard2', name: 'Aquapolis' },
  skyridge: { id: 'ecard3', name: 'Skyridge' },
  'ruby-sapphire': { id: 'ex1', name: 'Ruby & Sapphire' },
  sandstorm: { id: 'ex2', name: 'Sandstorm' },
  dragon: { id: 'ex3', name: 'Dragon' },
  'nintendo-black-star-promos': {
    id: 'np',
    name: 'Nintendo Black Star Promos'
  },
  'team-magma-vs-team-aqua': { id: 'ex4', name: 'Team Magma vs Team Aqua' },
  'hidden-legends': { id: 'ex5', name: 'Hidden Legends' },
  'firered-leafgreen': { id: 'ex6', name: 'FireRed & LeafGreen' },
  'pop-series-1': { id: 'pop1', name: 'POP Series 1' },
  'team-rocket-returns': { id: 'ex7', name: 'Team Rocket Returns' },
  deoxys: { id: 'ex8', name: 'Deoxys' },
  emerald: { id: 'ex9', name: 'Emerald' },
  'unseen-forces': { id: 'ex10', name: 'Unseen Forces' },
  'pop-series-2': { id: 'pop2', name: 'POP Series 2' },
  'delta-species': { id: 'ex11', name: 'Delta Species' },
  'legend-maker': { id: 'ex12', name: 'Legend Maker' },
  'pop-series-3': { id: 'pop3', name: 'POP Series 3' },
  'holon-phantoms': { id: 'ex13', name: 'Holon Phantoms' },
  'crystal-guardians': { id: 'ex14', name: 'Crystal Guardians' },
  'pop-series-4': { id: 'pop4', name: 'POP Series 4' },
  'dragon-frontiers': { id: 'ex15', name: 'Dragon Frontiers' },
  'pop-series-5': { id: 'pop5', name: 'POP Series 5' },
  'power-keepers': { id: 'ex16', name: 'Power Keepers' },
  'diamond-pearl': { id: 'dp1', name: 'Diamond & Pearl' },
  'dp-black-star-promos': { id: 'dpp', name: 'DP Black Star Promos' },
  'mysterious-treasures': { id: 'dp2', name: 'Mysterious Treasures' },
  'pop-series-6': { id: 'pop6', name: 'POP Series 6' },
  'secret-wonders': { id: 'dp3', name: 'Secret Wonders' },
  'great-encounters': { id: 'dp4', name: 'Great Encounters' },
  'pop-series-7': { id: 'pop7', name: 'POP Series 7' },
  'majestic-dawn': { id: 'dp5', name: 'Majestic Dawn' },
  'legends-awakened': { id: 'dp6', name: 'Legends Awakened' },
  'pop-series-8': { id: 'pop8', name: 'POP Series 8' },
  stormfront: { id: 'dp7', name: 'Stormfront' },
  platinum: { id: 'pl1', name: 'Platinum' },
  'pop-series-9': { id: 'pop9', name: 'POP Series 9' },
  'rising-rivals': { id: 'pl2', name: 'Rising Rivals' },
  'supreme-victors': { id: 'pl3', name: 'Supreme Victors' },
  arceus: { id: 'pl4', name: 'Arceus' },
  'pokemon-rumble': { id: 'ru1', name: 'Pokémon Rumble' },
  'heartgold-soulsilver': { id: 'hgss1', name: 'HeartGold & SoulSilver' },
  'hgss-black-star-promos': { id: 'hsp', name: 'HGSS Black Star Promos' },
  'hs-unleashed': { id: 'hgss2', name: 'HS-Unleashed' },
  'hs-undaunted': { id: 'hgss3', name: 'HS-Undaunted' },
  'hs-triumphant': { id: 'hgss4', name: 'HS-Triumphant' },
  'call-of-legends': { id: 'col1', name: 'Call of Legends' },
  'bw-black-star-promos': { id: 'bwp', name: 'BW Black Star Promos' },
  'black-white': { id: 'bw1', name: 'Black & White' },
  'emerging-powers': { id: 'bw2', name: 'Emerging Powers' },
  'noble-victories': { id: 'bw3', name: 'Noble Victories' },
  'next-destinies': { id: 'bw4', name: 'Next Destinies' },
  'dark-explorers': { id: 'bw5', name: 'Dark Explorers' },
  'dragons-exalted': { id: 'bw6', name: 'Dragons Exalted' },
  'dragon-vault': { id: 'dv1', name: 'Dragon Vault' },
  'boundaries-crossed': { id: 'bw7', name: 'Boundaries Crossed' },
  'plasma-storm': { id: 'bw8', name: 'Plasma Storm' },
  'plasma-freeze': { id: 'bw9', name: 'Plasma Freeze' },
  'plasma-blast': { id: 'bw10', name: 'Plasma Blast' },
  'xy-black-star-promos': { id: 'xyp', name: 'XY Black Star Promos' },
  'legendary-treasures': { id: 'bw11', name: 'Legendary Treasures' },
  'kalos-starter-set': { id: 'xy0', name: 'Kalos Starter Set' },
  xy: { id: 'xy1', name: 'XY' },
  flashfire: { id: 'xy2', name: 'Flashfire' },
  'furious-fists': { id: 'xy3', name: 'Furious Fists' },
  'phantom-forces': { id: 'xy4', name: 'Phantom Forces' },
  'primal-clash': { id: 'xy5', name: 'Primal Clash' },
  'double-crisis': { id: 'dc1', name: 'Double Crisis' },
  'roaring-skies': { id: 'xy6', name: 'Roaring Skies' },
  'ancient-origins': { id: 'xy7', name: 'Ancient Origins' },
  breakthrough: { id: 'xy8', name: 'BREAKthrough' },
  breakpoint: { id: 'xy9', name: 'BREAKpoint' },
  generations: { id: 'g1', name: 'Generations' },
  'fates-collide': { id: 'xy10', name: 'Fates Collide' },
  'steam-siege': { id: 'xy11', name: 'Steam Siege' },
  evolutions: { id: 'xy12', name: 'Evolutions' },
  'sun-moon': { id: 'sm1', name: 'Sun & Moon' },
  'sm-black-star-promos': { id: 'smp', name: 'SM Black Star Promos' },
  'guardians-rising': { id: 'sm2', name: 'Guardians Rising' },
  'burning-shadows': { id: 'sm3', name: 'Burning Shadows' },
  'shining-legends': { id: 'sm35', name: 'Shining Legends' },
  'crimson-invasion': { id: 'sm4', name: 'Crimson Invasion' },
  'ultra-prism': { id: 'sm5', name: 'Ultra Prism' },
  'forbidden-light': { id: 'sm6', name: 'Forbidden Light' },
  'celestial-storm': { id: 'sm7', name: 'Celestial Storm' },
  'dragon-majesty': { id: 'sm75', name: 'Dragon Majesty' },
  'lost-thunder': { id: 'sm8', name: 'Lost Thunder' },
  'team-up': { id: 'sm9', name: 'Team Up' },
  'detective-pikachu': { id: 'det1', name: 'Detective Pikachu' },
  'unbroken-bonds': { id: 'sm10', name: 'Unbroken Bonds' },
  'unified-minds': { id: 'sm11', name: 'Unified Minds' },
  'hidden-fates': { id: 'sm115', name: 'Hidden Fates' },
  'shiny-vault': { id: 'sma', name: 'Shiny Vault' },
  'cosmic-eclipse': { id: 'sm12', name: 'Cosmic Eclipse' },
  'sword-shield': { id: 'swsh1', name: 'Sword & Shield' },
  'rebel-clash': { id: 'swsh2', name: 'Rebel Clash' },
  'darkness-ablaze': { id: 'swsh3', name: 'Darkness Ablaze' },
  'champions-path': { id: 'swsh35', name: "Champion's Path" },
  'swsh-black-star-promos': { id: 'swshp', name: 'SWSH Black Star Promos' },
  'vivid-voltage': { id: 'swsh4', name: 'Vivid Voltage' },
  'mcdonalds-collection-2011': {
    id: 'mcd11',
    name: "McDonald's Collection 2011"
  },
  'mcdonalds-collection-2012': {
    id: 'mcd12',
    name: "McDonald's Collection 2012"
  },
  'mcdonalds-collection-2016': {
    id: 'mcd16',
    name: "McDonald's Collection 2016"
  },
  'mcdonalds-collection-2019': {
    id: 'mcd19',
    name: "McDonald's Collection 2019"
  },
  'shining-fates': {
    id: 'swsh45',
    name: 'Shining Fates'
  },
  'swsh-shiny-vault': {
    id: 'swsh45sv',
    name: 'Shiny Vault'
  }
}

export const pokemonSets = {
  mcd11: {
    id: 'mcd11',
    name: "McDonald's Collection 2011",
    series: 'Other'
  },
  mcd12: {
    id: 'mcd12',
    name: "McDonald's Collection 2012",
    series: 'Other'
  },
  mcd16: {
    id: 'mcd16',
    name: "McDonald's Collection 2016",
    series: 'Other'
  },
  mcd19: {
    id: 'mcd19',
    name: "McDonald's Collection 2019",
    series: 'Other'
  },
  si1: { id: 'si1', name: 'Southern Islands', series: 'Other' },
  ru1: { id: 'ru1', name: 'Pokémon Rumble', series: 'Other' },
  base1: { id: 'base1', name: 'Base', series: 'Base' },
  base2: { id: 'base2', name: 'Jungle', series: 'Base' },
  basep: {
    id: 'basep',
    name: 'Wizards Black Star Promos',
    series: 'Base'
  },
  base3: { id: 'base3', name: 'Fossil', series: 'Base' },
  base4: { id: 'base4', name: 'Base Set 2', series: 'Base' },
  base5: { id: 'base5', name: 'Team Rocket', series: 'Base' },
  gym1: { id: 'gym1', name: 'Gym Heroes', series: 'Gym' },
  gym2: { id: 'gym2', name: 'Gym Challenge', series: 'Gym' },
  neo1: { id: 'neo1', name: 'Neo Genesis', series: 'Neo' },
  neo2: { id: 'neo2', name: 'Neo Discovery', series: 'Neo' },
  neo3: { id: 'neo3', name: 'Neo Revelation', series: 'Neo' },
  neo4: { id: 'neo4', name: 'Neo Destiny', series: 'Neo' },
  base6: {
    id: 'base6',
    name: 'Legendary Collection',
    series: 'Legendary Collection'
  },
  ecard1: { id: 'ecard1', name: 'Expedition Base Set', series: 'E-Card' },
  ecard2: { id: 'ecard2', name: 'Aquapolis', series: 'E-Card' },
  ecard3: { id: 'ecard3', name: 'Skyridge', series: 'E-Card' },
  ex1: { id: 'ex1', name: 'Ruby & Sapphire', series: 'EX' },
  ex2: { id: 'ex2', name: 'Sandstorm', series: 'EX' },
  ex3: { id: 'ex3', name: 'Dragon', series: 'EX' },
  np: {
    id: 'np',
    name: 'Nintendo Black Star Promos',
    series: 'Nintendo Promos'
  },
  ex4: { id: 'ex4', name: 'Team Magma vs Team Aqua', series: 'EX' },
  ex5: { id: 'ex5', name: 'Hidden Legends', series: 'EX' },
  ex6: { id: 'ex6', name: 'FireRed & LeafGreen', series: 'EX' },
  pop1: { id: 'pop1', name: 'POP Series 1', series: 'POP' },
  ex7: { id: 'ex7', name: 'Team Rocket Returns', series: 'EX' },
  ex8: { id: 'ex8', name: 'Deoxys', series: 'EX' },
  ex9: { id: 'ex9', name: 'Emerald', series: 'EX' },
  ex10: { id: 'ex10', name: 'Unseen Forces', series: 'EX' },
  pop2: { id: 'pop2', name: 'POP Series 2', series: 'POP' },
  ex11: { id: 'ex11', name: 'Delta Species', series: 'EX' },
  ex12: { id: 'ex12', name: 'Legend Maker', series: 'EX' },
  pop3: { id: 'pop3', name: 'POP Series 3', series: 'POP' },
  ex13: { id: 'ex13', name: 'Holon Phantoms', series: 'EX' },
  ex14: { id: 'ex14', name: 'Crystal Guardians', series: 'EX' },
  pop4: { id: 'pop4', name: 'POP Series 4', series: 'POP' },
  ex15: { id: 'ex15', name: 'Dragon Frontiers', series: 'EX' },
  pop5: { id: 'pop5', name: 'POP Series 5', series: 'POP' },
  ex16: { id: 'ex16', name: 'Power Keepers', series: 'EX' },
  dp1: { id: 'dp1', name: 'Diamond & Pearl', series: 'Diamond & Pearl' },
  dpp: { id: 'dpp', name: 'DP Black Star Promos', series: 'Diamond & Pearl' },
  dp2: { id: 'dp2', name: 'Mysterious Treasures', series: 'Diamond & Pearl' },
  pop6: { id: 'pop6', name: 'POP Series 6', series: 'POP' },
  dp3: { id: 'dp3', name: 'Secret Wonders', series: 'Diamond & Pearl' },
  dp4: { id: 'dp4', name: 'Great Encounters', series: 'Diamond & Pearl' },
  pop7: { id: 'pop7', name: 'POP Series 7', series: 'POP' },
  dp5: { id: 'dp5', name: 'Majestic Dawn', series: 'Diamond & Pearl' },
  dp6: { id: 'dp6', name: 'Legends Awakened', series: 'Diamond & Pearl' },
  pop8: { id: 'pop8', name: 'POP Series 8', series: 'POP' },
  dp7: { id: 'dp7', name: 'Stormfront', series: 'Diamond & Pearl' },
  pl1: { id: 'pl1', name: 'Platinum', series: 'Platinum' },
  pop9: { id: 'pop9', name: 'POP Series 9', series: 'POP' },
  pl2: { id: 'pl2', name: 'Rising Rivals', series: 'Platinum' },
  pl3: { id: 'pl3', name: 'Supreme Victors', series: 'Platinum' },
  pl4: { id: 'pl4', name: 'Arceus', series: 'Platinum' },
  hgss1: {
    id: 'hgss1',
    name: 'HeartGold & SoulSilver',
    series: 'HeartGold & SoulSilver'
  },
  hsp: {
    id: 'hsp',
    name: 'HGSS Black Star Promos',
    series: 'HeartGold & SoulSilver'
  },
  hgss2: {
    id: 'hgss2',
    name: 'HS-Unleashed',
    series: 'HeartGold & SoulSilver'
  },
  hgss3: {
    id: 'hgss3',
    name: 'HS-Undaunted',
    series: 'HeartGold & SoulSilver'
  },
  hgss4: {
    id: 'hgss4',
    name: 'HS-Triumphant',
    series: 'HeartGold & SoulSilver'
  },
  col1: {
    id: 'col1',
    name: 'Call of Legends',
    series: 'HeartGold & SoulSilver'
  },
  bwp: { id: 'bwp', name: 'BW Black Star Promos', series: 'Black & White' },
  bw1: { id: 'bw1', name: 'Black & White', series: 'Black & White' },
  bw2: { id: 'bw2', name: 'Emerging Powers', series: 'Black & White' },
  bw3: { id: 'bw3', name: 'Noble Victories', series: 'Black & White' },
  bw4: { id: 'bw4', name: 'Next Destinies', series: 'Black & White' },
  bw5: { id: 'bw5', name: 'Dark Explorers', series: 'Black & White' },
  bw6: { id: 'bw6', name: 'Dragons Exalted', series: 'Black & White' },
  dv1: { id: 'dv1', name: 'Dragon Vault', series: 'Black & White' },
  bw7: { id: 'bw7', name: 'Boundaries Crossed', series: 'Black & White' },
  bw8: { id: 'bw8', name: 'Plasma Storm', series: 'Black & White' },
  bw9: { id: 'bw9', name: 'Plasma Freeze', series: 'Black & White' },
  bw10: { id: 'bw10', name: 'Plasma Blast', series: 'Black & White' },
  xyp: { id: 'xyp', name: 'XY Black Star Promos', series: 'XY' },
  bw11: { id: 'bw11', name: 'Legendary Treasures', series: 'Black & White' },
  xy0: { id: 'xy0', name: 'Kalos Starter Set', series: 'XY' },
  xy1: { id: 'xy1', name: 'XY', series: 'XY' },
  xy2: { id: 'xy2', name: 'Flashfire', series: 'XY' },
  xy3: { id: 'xy3', name: 'Furious Fists', series: 'XY' },
  xy4: { id: 'xy4', name: 'Phantom Forces', series: 'XY' },
  xy5: { id: 'xy5', name: 'Primal Clash', series: 'XY' },
  dc1: { id: 'dc1', name: 'Double Crisis', series: 'XY' },
  xy6: { id: 'xy6', name: 'Roaring Skies', series: 'XY' },
  xy7: { id: 'xy7', name: 'Ancient Origins', series: 'XY' },
  xy8: { id: 'xy8', name: 'BREAKthrough', series: 'XY' },
  xy9: { id: 'xy9', name: 'BREAKpoint', series: 'XY' },
  g1: { id: 'g1', name: 'Generations', series: 'XY' },
  xy10: { id: 'xy10', name: 'Fates Collide', series: 'XY' },
  xy11: { id: 'xy11', name: 'Steam Siege', series: 'XY' },
  xy12: { id: 'xy12', name: 'Evolutions', series: 'XY' },
  sm1: { id: 'sm1', name: 'Sun & Moon', series: 'Sun & Moon' },
  smp: { id: 'smp', name: 'SM Black Star Promos', series: 'Sun & Moon' },
  sm2: { id: 'sm2', name: 'Guardians Rising', series: 'Sun & Moon' },
  sm3: { id: 'sm3', name: 'Burning Shadows', series: 'Sun & Moon' },
  sm35: { id: 'sm35', name: 'Shining Legends', series: 'Sun & Moon' },
  sm4: { id: 'sm4', name: 'Crimson Invasion', series: 'Sun & Moon' },
  sm5: { id: 'sm5', name: 'Ultra Prism', series: 'Sun & Moon' },
  sm6: { id: 'sm6', name: 'Forbidden Light', series: 'Sun & Moon' },
  sm7: { id: 'sm7', name: 'Celestial Storm', series: 'Sun & Moon' },
  sm75: { id: 'sm75', name: 'Dragon Majesty', series: 'Sun & Moon' },
  sm8: { id: 'sm8', name: 'Lost Thunder', series: 'Sun & Moon' },
  sm9: { id: 'sm9', name: 'Team Up', series: 'Sun & Moon' },
  det1: { id: 'det1', name: 'Detective Pikachu', series: 'Sun & Moon' },
  sm10: { id: 'sm10', name: 'Unbroken Bonds', series: 'Sun & Moon' },
  sm11: { id: 'sm11', name: 'Unified Minds', series: 'Sun & Moon' },
  sm115: { id: 'sm115', name: 'Hidden Fates', series: 'Sun & Moon' },
  sma: { id: 'sma', name: 'Shiny Vault', series: 'Sun & Moon' },
  sm12: { id: 'sm12', name: 'Cosmic Eclipse', series: 'Sun & Moon' },
  swsh1: { id: 'swsh1', name: 'Sword & Shield', series: 'Sword & Shield' },
  swsh2: { id: 'swsh2', name: 'Rebel Clash', series: 'Sword & Shield' },
  swsh3: { id: 'swsh3', name: 'Darkness Ablaze', series: 'Sword & Shield' },
  swsh35: { id: 'swsh35', name: "Champion's Path", series: 'Sword & Shield' },
  swshp: {
    id: 'swshp',
    name: 'SWSH Black Star Promos',
    series: 'Sword & Shield'
  },
  swsh4: { id: 'swsh4', name: 'Vivid Voltage', series: 'Sword & Shield' },
  swsh45: {
    id: 'swsh45',
    name: 'Shining Fates',
    series: 'Sword & Shield'
  },
  swsh45sv: {
    id: 'swsh45sv',
    name: 'Shiny Vault',
    series: 'Sword & Shield'
  }
}

const PokemonSeries = {
  other: {},
  base: {},
  gym: {},
  neo: {},
  legendary: {},
  'e-card': {},
  ex: {},
  pop: {},
  xy: {},
  np: {},
  platinum: {},
  'diamond-pearl': {},
  'heartgold-soulsilver': {},
  'black-white': {},
  'sword-shield': {},
  'sun-moon': {}
}
