export type TApartments = {
  id: number | string,
  room: string
  square: string
  price: string
  guest: number
  location: string
  description: string
  status: 'AVAILABLE' | 'BOOKED'
  images: string[]
}

export type TFormData = {
  room: string | number,
  capacity: string | number,
  price: string | number,
  minSize: string | number,
  maxSize: string | number
}
