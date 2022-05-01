import { collection, getDocs } from 'firebase/firestore'
import { useQuery } from 'react-query'
import { db } from '../../../firebase-config'
import { TComments } from './type'

async function getComments(): Promise<TComments[]> {
  try {
    const response = await getDocs(collection(db, 'comments')).then(({ docs }) =>
      docs.map((doc) => ({ ...doc.data() })))
    console.log('res', response)
    return response as TComments[]
  } catch (e: any) {
    throw new Error(e)
  }
}

export function useComments() {
  return useQuery<TComments[], Error>('Comments', getComments)
}
