import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useMutation } from 'react-query'
import React from 'react'
import { TFormData } from './type'
import { auth } from '../../../firebase-config'
import { useAuthContext } from '../state/authGuard'

enum QueryKeys {
  Login = 'Login'
}

async function register(formData: TFormData, setAuthData: React.Dispatch<any>) {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
    console.log('user', user)
    setAuthData(user)
  } catch (err: any) {
    throw new Error('Email already in use')
  }
}

export function useRegisterMutation() {
  const navigate = useNavigate()
  const { setAuthData } = useAuthContext()
  const key = QueryKeys.Login

  return useMutation<void, Error, TFormData>(
    (formData) => register(formData, setAuthData),
    {
      mutationKey: key,
      onSuccess: () => navigate('/')
    }
  )
}
