import { sets } from '@data/pokemon/sets/all.json'

export const getSetSeries = (name: string) =>
  sets.filter(set => set.seriesPath === name.toLowerCase())

export const getSetSeriesPaths = () => sets.filter(set => set.seriesPath)

export const getSetIdsByPaths = (
  seriesPath: string | string[],
  namePath: string | string[]
) => {
  const value = sets.filter(
    set => set.namePath === namePath && set.seriesPath === seriesPath
  )

  if (!value.length) {
    return null
  }
  return value[0].id
}
