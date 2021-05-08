import axios, { AxiosResponse } from 'axios'

const BASE_URL: string = process.env.NEXTAUTH_URL || 'http://localhost:3000'

const instance = axios.create({
  baseURL: BASE_URL,
  method: 'GET',
  headers: {
    Accept: 'application/json'
  }
})

export function fetcher(url: string): Promise<AxiosResponse> {
  return instance.get(url).then(res => res.data)
}
