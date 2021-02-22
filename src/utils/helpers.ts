import { pokemonSets } from './pokemon'

export function cleanName(name: string | number): string {
  return name
    .toString()
    .replace(/[&\/\\#,+()$~%.\-—'":*?<>{}]/g, '')
    .replace(/[\s—]+/g, '-')
    .replace(/[\350-\353]/g, 'e')
    .toLowerCase()
}

export function setPath(name: string): string {
  const setName = cleanName(pokemonSets[name].name)
  const setSeries = cleanName(pokemonSets[name].series)

  return `${setSeries}/${setName}`
}

export function toLowerString(str: string): string {
  return str.toString().toLowerCase()
}

export function upperFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const CARD_PRINTING = {
  normal: 'Normal',
  holofoil: 'Holofoil',
  reverseHolofoil: 'Reverse Holofoil',
  '1stEditionNormal': '1st Ed. Normal',
  '1stEditionHolofoil': '1st Ed. Holofoil'
}
