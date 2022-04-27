import { useQuery } from 'react-query'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { TApartments } from './types'
import { db } from '../../../firebase-config'

enum QueryKey {
  Apartments = 'Apartments',
  Apartment = 'Apartment'
}

async function getApartments(): Promise<TApartments[]> {
  try {
    const response = await getDocs(collection(db, 'rent')).then(({ docs }) =>
      docs.map((doc) => ({ ...doc.data() })))

    return response as TApartments[]
  } catch (e) {
    throw new Error('Something went wrong')
  }
}

async function getApartment(id?: string): Promise<TApartments> {
  try {
    const response = await getDoc(doc(db, 'rent', id!)).then((doc) => doc.data())
    return response as TApartments
  } catch (e) {
    throw new Error('Something went wrong')
  }
}

export function useApartmentQuery(id?: string) {
  const key = QueryKey.Apartment

  return useQuery<TApartments, Error>(
    [key, id],
    () => getApartment(id),
    {
      enabled: !!id
    }
  )
}

export function useApartmentsQuery() {
  const key = QueryKey.Apartments

  return useQuery<TApartments[], Error>(
    [key],
    getApartments,
    {
      keepPreviousData: true
    }
  )
}
