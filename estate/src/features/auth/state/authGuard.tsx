import constate from 'constate'
import { useLocalStorage } from 'react-use'
import { AUTH_LOCAL_STORAGE_KEY } from '../../../constants/localStorage'

function useAuth() {
  const [authData, setAuthData, removeAuthData] = useLocalStorage<any>(AUTH_LOCAL_STORAGE_KEY)

  return {
    authData,
    setAuthData,
    removeAuthData
  }
}

export const [AuthProvider, useAuthContext] = constate(useAuth)
