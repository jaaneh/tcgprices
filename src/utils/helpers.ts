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

/**
 * Convert string to lowercase.
 * @param val string to convert.
 * @returns Stringified and lowercased value.
 */
export function toLowerString(val: string): string {
  return val.toString().toLowerCase()
}

/**
 * Convert first letter of string to uppercase.
 * @param str String to convert first letter of.
 * @returns Same string as supplied with uppercase first letter.
 */
export function upperFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Compare two strings with each other.
 * @param stringOne First string to compare.
 * @param stringTwo Second string to compare.
 * @returns boolean
 */
export function compareStrings(stringOne: string, stringTwo: string): boolean {
  return toLowerString(stringOne) === toLowerString(stringTwo)
}

export const CARD_PRINTING = {
  normal: 'Normal',
  holofoil: 'Holofoil',
  reverseHolofoil: 'Reverse Holofoil',
  '1stEditionNormal': '1st Ed. Normal',
  '1stEditionHolofoil': '1st Ed. Holofoil'
}

export const SIGNUP_ERRORS = {
  'ValidationError: "username" is not allowed to be empty':
    "Username can't be blank",
  'ValidationError: "username" length must be at least 4 characters long':
    'Username must be at least 4 characters',
  'ValidationError: "email" is not allowed to be empty': "Email can't be blank",
  'ValidationError: "email" must be a valid email': 'Must be a valid email',
  'ValidationError: "password" is not allowed to be empty':
    "Password can't be blank",
  'ValidationError: "password" length must be at least 8 characters long':
    'Password must be at least 8 characters',
  'ValidationError: "repeat_password" must be [ref:password]':
    "Passwords don't match"
}
