export type TApartments = {
  id: number,
  room: string
  square: string
  price: string
  guest: number
  location: string
  description: string
  status: 'AVAILABLE' | 'BOOKED'
  images: string[]
}
