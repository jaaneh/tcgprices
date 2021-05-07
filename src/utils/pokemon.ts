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
