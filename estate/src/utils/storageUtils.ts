type TUserData={
  id:number
  username:string
}

type TField='id'|'username'

export const getLocalToken = () => localStorage.getItem('token')

export const setTokenStorage = (token: string) => localStorage.setItem('token', token)

export const setUserData = (data:TUserData) => localStorage.setItem('user', JSON.stringify(data))

export const getUserData = (field:TField) => {
  const userLocal = localStorage.getItem('user')
  const user = userLocal && JSON.parse(localStorage.getItem('user') || ' ')
  return user && user[field]
}
