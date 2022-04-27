import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useMutation } from 'react-query'
import { TFormData } from './type'
import { auth } from '../../../firebase-config'

enum QueryKeys {
  Login = 'Login'
}

async function login(formData: TFormData) {
  try {
    const { user } = await signInWithEmailAndPassword(auth, formData.email, formData.password)
    return user
  } catch (err: any) {
    throw new Error('Something went wrong')
  }
}

export function useLoginMutation() {
  const navigate = useNavigate()
  const key = QueryKeys.Login

  return useMutation<any, Error, TFormData>(
    (formData) => login(formData),
    {
      mutationKey: key,
      onSuccess: () => navigate('/')
    }
  )
}
