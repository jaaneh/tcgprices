import { Document } from 'mongoose'

// ======================
export interface IResponse {
  success: boolean
  data?: {
    [key: string]: any
  }
  error?: {
    [key: string]: any
  }
}

export type IStrBool = string | boolean
export type IStrNum = string | number

export interface ITCGAPI {
  [key: string]: any
}

export interface ICache {
  [key: string]: any
}

export interface IJoiError {
  context: {
    label: string
    value: string
    key: string
  }
  message: string
  path: string[]
  type: string
}

export interface IGameSelection {
  enabled: boolean
  name: string
  displayName: string
  path: string
  images: {
    cover: string
  }
}

export interface ICustomPokemonSet extends IPokemonSet {
  namePath: string
  seriesPath: string
}

// api-v2
export interface IPokemonCard {
  id: string
  name: string
  supertype: string
  subtypes: string[]
  hp: string
  types: string[]
  evolvesTo: string[]
  attacks: [IPokemonCardAttacks]
  weaknesses: [IPokemonCardWeaknesses]
  retreatCost: string[]
  convertedRetreatCost: number
  set: IPokemonSet
  number: string
  artist: string
  rarity: string
  flavorText: string
  nationalPokedexNumbers: number[]
  legalities: IPokemonCardLegalities
  images: IPokemonCardImages
  tcgplayer: IPokemonCardTCGPlayer
}

export interface IPokemonSet {
  id: string
  name: string
  series: string
  printedTotal: number
  total: number
  legalities: IPokemonCardLegalities
  ptcgoCode: string
  releaseDate: string
  updatedAt: string
  images: IPokemonCardTCGImages
}

interface IPokemonCardAttacks {
  name: string
  cost: string[]
  convertedEnergyCost: number
  damage: string
  text: string
}

interface IPokemonCardWeaknesses {
  type: string
  value: string
}

interface IPokemonCardLegalities {
  unlimited?: string
  standard?: string
  expanded?: string
}

interface IPokemonCardTCGImages {
  symbol: string
  logo: string
}

interface IPokemonCardImages {
  small: string
  large: string
}

interface IPokemonCardTCGPrices {
  low: number | null
  mid: number | null
  high: number | null
  market: number | null
  directLow: number | null
}

interface IPokemonCardTCGPlayer {
  url: string
  updatedAr: string
  prices: {
    normal?: IPokemonCardTCGPrices
    holofoil?: IPokemonCardTCGPrices
    reverseHolofoil?: IPokemonCardTCGPrices
  }
}

export interface IPokemonCardPageContent {
  card: IPokemonCard
}

export interface IPokemonSetPageContent {
  displayName?: string
  content: IPokemonCard[]
}

export type PokemonSetIds =
  | 'base1'
  | 'base2'
  | 'basep'
  | 'base3'
  | 'base4'
  | 'base5'
  | 'gym1'
  | 'gym2'
  | 'neo1'
  | 'neo2'
  | 'si1'
  | 'neo3'
  | 'neo4'
  | 'base6'
  | 'ecard1'
  | 'ecard2'
  | 'ecard3'
  | 'ex1'
  | 'ex2'
  | 'ex3'
  | 'np'
  | 'ex4'
  | 'ex5'
  | 'ex6'
  | 'pop1'
  | 'ex7'
  | 'ex8'
  | 'ex9'
  | 'ex10'
  | 'pop2'
  | 'ex11'
  | 'ex12'
  | 'pop3'
  | 'ex13'
  | 'ex14'
  | 'pop4'
  | 'ex15'
  | 'pop5'
  | 'ex16'
  | 'dp1'
  | 'dpp'
  | 'dp2'
  | 'pop6'
  | 'dp3'
  | 'dp4'
  | 'pop7'
  | 'dp5'
  | 'dp6'
  | 'pop8'
  | 'dp7'
  | 'pl1'
  | 'pop9'
  | 'pl2'
  | 'pl3'
  | 'pl4'
  | 'ru1'
  | 'hgss1'
  | 'hsp'
  | 'hgss2'
  | 'hgss3'
  | 'hgss4'
  | 'col1'
  | 'bwp'
  | 'bw1'
  | 'bw2'
  | 'bw3'
  | 'bw4'
  | 'bw5'
  | 'bw6'
  | 'dv1'
  | 'bw7'
  | 'bw8'
  | 'bw9'
  | 'bw10'
  | 'xyp'
  | 'bw11'
  | 'xy0'
  | 'xy1'
  | 'xy2'
  | 'xy3'
  | 'xy4'
  | 'xy5'
  | 'dc1'
  | 'xy6'
  | 'xy7'
  | 'xy8'
  | 'xy9'
  | 'g1'
  | 'xy10'
  | 'xy11'
  | 'xy12'
  | 'sm1'
  | 'smp'
  | 'sm2'
  | 'sm3'
  | 'sm35'
  | 'sm4'
  | 'sm5'
  | 'sm6'
  | 'sm7'
  | 'sm75'
  | 'sm8'
  | 'sm9'
  | 'det1'
  | 'sm10'
  | 'sm11'
  | 'sm115'
  | 'sma'
  | 'sm12'
  | 'swsh1'
  | 'swsh2'
  | 'swsh3'
  | 'swsh35'
  | 'swshp'
  | 'swsh4'
  | 'swsh45'
  | 'swsh45sv'
  | 'swsh5'
  | 'mcd11'
  | 'mcd12'
  | 'mcd16'

// Databse models
export interface IMongoUserModel extends Document {
  uuid: string
  username: string
  email: string
  password: string
  signed_up: number
  last_signin: number
  permissions: string
  images: {
    profile_picture: string
  }
}

export interface IMongoSavedCardsModel extends Document {
  collection_id: string
  cards: [
    {
      id: string
      name: string
      number: string
      path: string
      set: IPokemonSet
      prices: {
        normal?: IPokemonCardTCGPrices
        holofoil?: IPokemonCardTCGPrices
        reverseHolofoil?: IPokemonCardTCGPrices
      }
    }
  ]
}
