import { useQuery } from 'react-query'
import axios from 'axios'
import { TApartments } from './types'

enum QueryKey {
  Apartments = 'Apartments',
  Apartment = 'Apartment'
}

async function getApartments(): Promise<TApartments[]> {
  try {
    const response = await axios.get('http://localhost:5001/products')
    return response.data
  } catch (e) {
    throw new Error('Something went wrong')
  }
}

async function getApartment(id?: string): Promise<TApartments> {
  try {
    const response = await axios(`http://localhost:5001/products/${id}`)
    return response.data
  } catch (e) {
    throw new Error('Something went wrong')
  }
}

export function useApartmentQuery(id?: string) {
  const key = QueryKey.Apartment

  return useQuery<TApartments, Error>(
    [key, id],
    () => getApartment(id)
  )
}

export function useApartmentsQuery() {
  const key = QueryKey.Apartments

  return useQuery<TApartments[], Error>(
    [key],
    getApartments
  )
}
