import * as React from 'react'
import styled, { css } from 'styled-components'
import SimpleImageSlider from 'react-simple-image-slider'

const SCarouselWrapper = styled.div`
  display: flex;
`

interface ICarouselSlide {
  active?: boolean;
}

const SCarouselSlide = styled.div<ICarouselSlide>`
  flex: 0 0 auto;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: all 0.5s ease;
  width: 100%;
`

interface ICarouselProps {
  currentSlide: number;
}

const SCarouselSlides = styled.div<ICarouselProps>`
  display: flex;
  ${(props) =>
    props.currentSlide
          && css`
            transform: translateX(-${props.currentSlide * 100}%);
          `};
  transition: all 0.5s ease;
`

let images: [
  {
    url:
      'https://images.pexels.com/photos/5779368/pexels-photo-5779368.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    url:
      'https://images.pexels.com/photos/5779423/pexels-photo-5779423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },

  {
    url:
      'https://images.pexels.com/photos/5779372/pexels-photo-5779372.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  }
]

const ImageSlider = () => (
  <div>
    <SimpleImageSlider
      width={896}
      height={504}
      images={images}
      showBullets
      showNavs
    />
  </div>
)

export default ImageSlider
