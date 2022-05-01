export type TBooked = {
  apartmentId: string
  from: {
    seconds: number
    nanoseconds: number
  }
  to: {
    seconds: number
    nanoseconds: number
  }
}
