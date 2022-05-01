import { useMutation } from 'react-query'
import { addDoc, collection } from 'firebase/firestore'
import { TFormData } from './types'
import { db } from '../../firebase-config'

enum QueryKeys {
  Comment = 'Comment'
}

type TGetUserData = {
  user: TFormData
}

async function postCommets({ user }: TGetUserData) {
  try {
    const docRef = collection(db, 'comments')
    await addDoc(docRef, { ...user })
  } catch (err: any) {
    throw new Error('Something went wrong')
  }
}

export function useContact() {
  const key = QueryKeys.Comment

  return useMutation<void, Error, TFormData>(
    (user) => postCommets({ user }),
    {
      mutationKey: key
    }
  )
}
