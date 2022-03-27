import { useMutation } from 'react-query'
import { TFormData } from './types'
import { DB } from '../../core/axios'

enum QueryKeys {
  Comment = 'Comment'
}

type TGetUserData = {
  user: TFormData
}

async function postCommets({ user }: TGetUserData) {
  const baseUrl = process.env.REACT_APP_HOST
  try {
    const response = await DB.post(`${baseUrl}/auth/login`, { ...user })
    return response.data
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
