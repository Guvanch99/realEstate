import { useMutation, useQuery, useQueryClient } from 'react-query'
import { addDoc, collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import { format } from 'date-fns'
import { TApartments } from './list/types'
import { db } from '../../firebase-config'

enum QueryKey {
  Apartments = 'Apartments',
  Apartment = 'Apartment',
  BookApartment = 'BookApartment'
}

async function getApartments(): Promise<TApartments[]> {
  try {
    const response = await getDocs(collection(db, 'rent')).then(({ docs }) =>
      docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    return response as unknown as TApartments[]
  } catch (e) {
    throw new Error('Something went wrong')
  }
}

async function bookApartment({ id, date }: {
  id: string, date: {
    from: Date
    to: Date
  }
}) {
  try {
    if (format(date.from, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd')) {
      const docRef = doc(db, 'rent', id!)
      await updateDoc(docRef, {
        status: 'BOOKED'
      })
    }
    const docRef = collection(db, 'bookedApartments')
    await addDoc(docRef, { ...date, apartmentId: id })
  } catch (e) {
    throw new Error('Something went wrong')
  }
}

async function getApartment(id?: string): Promise<TApartments> {
  try {
    const response = await getDoc(doc(db, 'rent', id!)).then((doc) => ({ ...doc.data(), id: doc.id }))
    return response as TApartments
  } catch (e) {
    throw new Error('Something went wrong')
  }
}

export function useApartmentBookQuery() {
  const queryCache = useQueryClient()
  return useMutation<any, Error, {
    id: string, date: {
      from: Date
      to: Date
    }
  }>(
    ({ id, date }) => bookApartment({ id, date }),
    {
      onSuccess: () => queryCache.invalidateQueries(QueryKey.Apartments)
    }
  )
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
