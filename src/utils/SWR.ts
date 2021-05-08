import axios, { AxiosResponse } from 'axios'

const BASE_URL: string =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

const instance = axios.create({
  baseURL: BASE_URL,
  method: 'GET',
  headers: {
    Accept: 'application/json'
  }
})

export async function fetcher(url: string): Promise<AxiosResponse> {
  return await instance.get(url).then(res => res.data)
}
