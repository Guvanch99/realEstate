import { RegisterOptions, ValidateResult } from 'react-hook-form'
import { EMAIL_VALIDATION, PASSWORD_VALIDATION } from '../../constants/regexes'

export const requiredRule: (message: string) => RegisterOptions['required'] = (message: string) => ({
  value: true,
  message: message || 'Required'
})

export const minLengthRule: (num: number) => RegisterOptions['minLength'] = (num) => ({
  value: num,
  message: `length be more than ${num}`
})

export const minRule: (num: number, msg: string) => RegisterOptions['min'] = (num, msg) => ({
  value: num,
  message: msg
})

export const maxRule: (num: number, msg: string) => RegisterOptions['max'] = (num, msg: string) => ({
  value: num,
  message: msg
})

export const emailValidation: RegisterOptions['validate'] = (email: string): ValidateResult =>
  EMAIL_VALIDATION.test(email)
  || 'Wrong data, please provide correct email'

export const passwordValidation: RegisterOptions['validate'] = (password: string): ValidateResult =>
  PASSWORD_VALIDATION.test(password)
  || 'Wrong data, please provide correct password'
