import { collection, getDocs } from 'firebase/firestore'
import { useQuery } from 'react-query'
import { db } from '../../../firebase-config'
import { TBooked } from './type'

async function getBookedApartments(): Promise<TBooked[]> {
  try {
    const response = await getDocs(collection(db, 'bookedApartments')).then(({ docs }) =>
      docs.map((doc) => ({ ...doc.data() })))
    return response as TBooked[]
  } catch (e: any) {
    throw new Error(e)
  }
}

export const useBookedApartments = () => useQuery<TBooked[], Error>('BookedApartments', getBookedApartments)
