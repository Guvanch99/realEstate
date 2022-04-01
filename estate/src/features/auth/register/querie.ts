import { useNavigate } from 'react-router-dom'

import { DB } from '../../../core/axios'
import { TFormData } from './type'

enum QueryKeys {
  Login = 'Login'
}

async function register(formData: TFormData) {
  try {
    const response = await DB.post<any>('/auth/login', { ...formData })
  } catch (err: any) {
    throw new Error('Something went wrong')
  }
}

export function useRegisterMutation() {
  const navigate = useNavigate()
  const key = QueryKeys.Login
  // const { setAuthData } = useAuthContext()
  //
  // return useMutation<void, Error, TFormData>(
  //   (formData) => useLogin(formData, setAuthData),
  //   {
  //     mutationKey: key,
  //     onSuccess: () => navigate('/')
  //   }
  // )
}
