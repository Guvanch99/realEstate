export type TFormApartment = {
  id: string,
  room: string
  square: string
  price: string
  guest: number
  location: string
  description: string
  images1: string
  images2: string
  images3: string
  images4: string
}

export type TAddApartment = {
  id: string,
  room: string
  square: string
  price: string
  guest: number
  location: string
  description: string
  images: string[]
  status: string
}
