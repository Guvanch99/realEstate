import { useMutation, useQueryClient } from 'react-query'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../../../firebase-config'
import { TAddApartment } from './type'

async function addApartment(data: TAddApartment): Promise<void> {
  try {
    const docRef = collection(db, 'rent')
    const res = await addDoc(docRef, data)
    console.log('res', res)
  } catch (e: any) {
    throw new Error('Something went wrong')
  }
}

export const useAddApartments = () => {
  const queryCache = useQueryClient()
  return useMutation<void, Error, { data: TAddApartment }>(
    ({ data }) => addApartment(data),
    {
      onSuccess: () => queryCache.invalidateQueries('Apartments')
    }
  )
}
