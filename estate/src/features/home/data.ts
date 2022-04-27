import FirstImage from './assets/first.jpeg'
import SecondImage from './assets/second.jpeg'
import ThirdImage from './assets/third.jpeg'
import FourthImage from './assets/fourth.jpeg'
import FifthImage from './assets/fifth.jpeg'
import { TChart, TGallery } from './type'

export const images = [
  {
    url: FirstImage,
    text: 'image1'
  },
  {
    url: SecondImage,
    text: 'image2'
  },
  {
    url: ThirdImage,
    text: 'image3'
  },
  {
    url: FourthImage,
    text: 'image4'
  },
  {
    url: FifthImage,
    text: 'image5'
  }
]

export const selectOptions = [
  {
    label: 'galleryRoom.all',
    value: 'All'
  },
  {
    label: 'galleryRoom.1',
    value: 'One Room'
  },
  {
    label: 'galleryRoom.2',
    value: 'Two Room'
  },
  {
    label: 'galleryRoom.3',
    value: 'Three Room'
  },
  {
    label: 'galleryRoom.4',
    value: 'Four Room'
  },
  {
    label: 'galleryRoom.5',
    value: 'Five Room'
  }
]

export const gallery: TGallery[] = [
  {
    status: 'One Room',
    image: 'one1.jpeg'
  },
  {
    status: 'One Room',
    image: 'one2.jpeg'
  },
  {
    status: 'One Room',
    image: 'one3.jpeg'
  },
  {
    status: 'Two Room',
    image: 'two1.jpeg'
  },
  {
    status: 'Two Room',
    image: 'two2.jpeg'
  },
  {
    status: 'Two Room',
    image: 'two3.jpeg'
  },
  {
    status: 'Two Room',
    image: 'two4.jpeg'
  },
  {
    status: 'Three Room',
    image: 'three1.png'
  },
  {
    status: 'Three Room',
    image: 'three2.png'
  },
  {
    status: 'Three Room',
    image: 'three3.jpeg'
  },
  {
    status: 'Three Room',
    image: 'three4.jpeg'
  },
  {
    status: 'Four Room',
    image: 'four1.jpeg'
  },
  {
    status: 'Four Room',
    image: 'four3.jpeg'
  },
  {
    status: 'Five Room',
    image: 'five1.jpeg'
  }

]

export const dataChart: TChart[] = [
  { name: 'galleryRoom.1', value: 20 },
  { name: 'galleryRoom.2', value: 10 },
  { name: 'galleryRoom.3', value: 40 },
  { name: 'galleryRoom.4', value: 20 },
  { name: 'galleryRoom.5', value: 20 }
]

export const LOTTIE_PATH = 'https://assets.codepen.io/3685267/cute-cat-works.json'
