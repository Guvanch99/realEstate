import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useMutation } from 'react-query'
import React from 'react'
import { TFormData } from './type'
import { auth } from '../../../firebase-config'
import { useAuthContext } from '../state/authGuard'

enum QueryKeys {
  Login = 'Login'
}

async function login(formData: TFormData, setAuthData: React.Dispatch<any>) {
  try {
    const { user } = await signInWithEmailAndPassword(auth, formData.email, formData.password)
    console.log({ ...user })
    setAuthData(user)
    return user
  } catch (error: any) {
    throw new Error('User not found')
  }
}

export function useLoginMutation() {
  const navigate = useNavigate()
  const { setAuthData } = useAuthContext()
  const key = QueryKeys.Login

  return useMutation<any, Error, TFormData>(
    (formData) => login(formData, setAuthData),
    {
      mutationKey: key,
      onSuccess: () => navigate('/')
    }
  )
}
