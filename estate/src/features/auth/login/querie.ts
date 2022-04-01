import { useNavigate } from 'react-router-dom'
import { TAuthData, TFormData } from './type'
import { DB } from '../../../core/axios'

enum QueryKeys {
  Login = 'Login'
}

async function login(formData: TFormData, setAuthData: (data: TAuthData) => void) {
  try {
    const response = await DB.post<TAuthData>('/auth/login', { ...formData })
    setAuthData(response.data)
  } catch (err: any) {
    throw new Error('Something went wrong')
  }
}

export function useLoginMutation() {
  const navigate = useNavigate()
  const key = QueryKeys.Login
  // const { setAuthData } = useAuthContext()
  //
  // return useMutation<void, Error, TFormData>(
  //   (formData) => login(formData, setAuthData),
  //   {
  //     mutationKey: key,
  //     onSuccess: () => navigate('/')
  //   }
  // )
}
