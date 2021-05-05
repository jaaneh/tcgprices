import allSets from '@data/pokemon/sets/all.json'
const sets = allSets.sets

export const getSetSeries = (name: string) =>
  sets.filter(set => set.seriesPath === name.toLowerCase())

export const getSetSeriesPaths = () => sets.filter(set => set.seriesPath)

export const getSetIdsByPaths = (
  seriesPath: string | string[] | undefined,
  namePath: string | string[] | undefined
) => {
  const value = sets.filter(
    set => set.namePath === namePath && set.seriesPath === seriesPath
  )

  if (!value.length) {
    return null
  }
  return value[0].id
}
