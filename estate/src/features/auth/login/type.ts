export type TFormData = {
  email: string
  password: string
}

export type TRole = 'SUPER_ADMIN' | 'ORGANIZATION' | 'USER'

export type TAuthData = {
  id: string
  userName: string
  email: string
}
