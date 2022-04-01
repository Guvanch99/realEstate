import { TOptions } from 'i18next'
import FirstImage from './assets/first.jpeg'
import SecondImage from './assets/second.jpeg'
import ThirdImage from './assets/third.jpeg'
import FourthImage from './assets/fourth.jpeg'
import FifthImage from './assets/fifth.jpeg'
import { TChart, TGallery, TServices } from './type'

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

export const selectOptions: TOptions = ['All', 'One Room', 'Two Room', 'Three Room', 'Four Room', 'Five Room']

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

export const ServicesData: TServices[] = [
  {
    header: 'lorem ipsum',
    icon: 'statistics',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur corporis,',
    footer: 'Latest Report',
    link: 'report'
  },
  {
    header: 'lorem ipsum',
    icon: 'transport',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur corporis,',
    footer: 'Help',
    link: 'help'
  }, {
    header: 'lorem ipsum',
    icon: 'signIn',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur corporis,',
    footer: 'Sign up',
    link: 'sign-up'
  }, {
    header: 'lorem ipsum',
    icon: 'news',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur corporis,',
    footer: 'Follow News',
    link: 'news'
  }, {
    header: 'lorem ipsum',
    icon: 'download',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur corporis,',
    footer: 'Download App',
    link: 'download'
  }, {
    header: 'lorem ipsum',
    icon: 'video',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur corporis,',
    footer: 'Watch video',
    link: 'watch'
  }
]

export const dataChart: TChart[] = [
  { name: 'One Room', value: 20 },
  { name: 'Two Room', value: 10 },
  { name: 'Three Room', value: 40 },
  { name: 'Four Room', value: 20 },
  { name: 'Five Room', value: 20 }
]

export const LOTTIE_PATH = 'https://assets.codepen.io/3685267/cute-cat-works.json'
