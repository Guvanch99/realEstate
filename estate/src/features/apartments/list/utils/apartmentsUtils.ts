import { TApartments } from '../types'

export const getUnique = (
  value: keyof TApartments,
  items?: TApartments[]
) => Array.from(new Set(items?.map((item) => item[value])))
