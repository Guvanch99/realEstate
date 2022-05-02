import constate from 'constate'
import { Navigate } from 'react-router-dom'
import { useLocalStorage } from 'react-use'
import { useState } from 'react'
import { AUTH_LOCAL_STORAGE_KEY } from '../../../constants/localStorage'

function useAuth() {
  const [authData, setAuthData, removeAuthData] = useLocalStorage<any>(AUTH_LOCAL_STORAGE_KEY)
  const [adminAuth, setAdminAuth] = useState(false)
  return {
    adminAuth,
    setAdminAuth,
    authData,
    setAuthData,
    removeAuthData
  }
}

export const [AuthProvider, useAuthContext] = constate(useAuth)

const AuthGuard = ({ children }: any) => {
  const { adminAuth } = useAuthContext()

  return adminAuth ? children : <Navigate to="/admin/login"/>
}

export default AuthGuard
