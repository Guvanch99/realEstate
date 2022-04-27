import { FlOAT_VALIDATION, INTEGER_VALIDATION } from '../constants/regexes'

export const integerFormat = (value: string) => value && value.replace(INTEGER_VALIDATION, '')
export const floatFormat = (value: string) => value && value.replace(FlOAT_VALIDATION, '')
