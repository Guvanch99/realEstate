import { Navigate } from 'react-router-dom'
import React from 'react'
import { getUserData } from '../../utils/storageUtils'

type TRequireAuth = {
  children: JSX.Element
}

const AuthGuard = ({ children }: TRequireAuth) => {
  const userId = getUserData('id')
  return userId ? children : <Navigate to="/login" />
}

export default AuthGuard
