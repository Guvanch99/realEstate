import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useMutation } from 'react-query'
import { TFormData } from './type'
import { auth } from '../../../firebase-config'

enum QueryKeys {
  Login = 'Login'
}

async function register(formData: TFormData) {
  console.log('re', formData)
  try {
    const { user } = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
    console.log('user', user)
  } catch (err: any) {
    console.log('err', err.response)
    throw new Error('Something went wrong')
  }
}

export function useRegisterMutation() {
  const navigate = useNavigate()
  const key = QueryKeys.Login

  return useMutation<void, Error, TFormData>(
    (formData) => register(formData),
    {
      mutationKey: key
      // onSuccess: () => navigate('/')
    }
  )
}
