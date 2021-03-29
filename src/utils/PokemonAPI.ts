import axios, { AxiosResponse } from 'axios'
import { PokemonSetIds } from '@interfaces'

const BASE_URL: string = 'https://api.pokemontcg.io/v2'

const instance = axios.create({
  baseURL: BASE_URL,
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'X-Api-Key': process.env.POKEMONTCG_API_KEY
  }
})

export default instance

// ENDPOINTS

export const getPokemonSet = async (
  setId: PokemonSetIds
): Promise<AxiosResponse> => {
  return await instance.get(`/sets?q=id:${setId}`)
}

export const getPokemonSeries = async (
  setSeries: string | string[]
): Promise<AxiosResponse> => {
  return await instance.get(`/sets?q=series:${setSeries}`)
}

export const getPokemonSetCards = async (
  setId: PokemonSetIds
): Promise<AxiosResponse> => {
  return await instance.get(`/cards?q=set.id:${setId}`)
}

export const getPokemonCard = async (
  setId: PokemonSetIds,
  cardNumber: string
): Promise<AxiosResponse> => {
  const query = encodeURI(`/cards?q=set.id:${setId} number:${cardNumber}`)
  return await instance.get(query)
}
