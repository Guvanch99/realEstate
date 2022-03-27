export type TServices = {
  header: string
  body: string
  footer: string
  icon: 'statistics' | 'transport' | 'signIn' | 'news' | 'download' | 'video'
  link: string
}

export type TOption = 'All' | 'One Room' | 'Two Room' | 'Three Room' | 'Four Room' | 'Five Room'

export type TGallery = {
  status: 'One Room' | 'Two Room' | 'Three Room' | 'Four Room' | 'Five Room'
  image: string
}

export type TChart = {
  name: string
  value: number
}
