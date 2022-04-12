export type TApartments = {
  id: number,
  room: string
  square: string
  price: string
  location: string
  description: string
  status: 'AVAILABLE' | 'BOOKED'
  images: string[]
}
