import * as React from 'react'
import { FC, useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { flex } from '../styles/mxins'

const SliderStyled = styled.figure<{ small?: boolean }>`
  height: ${({ small }) => (small ? 330 : 550)}px;
  padding-bottom: 32px;
  margin: 16px 32px;
  max-width: 100%;
`

const ImageStyled = styled.img`
  position: relative;
  height: 480px;
  width: 100%;
  min-width: 500px;
  max-height: 100%;
  border-radius: 20px;
  transition: all 1s ease-in;
  object-fit: cover;

  &:hover {
    transform: scale(1.05);
  }
`

const BaseFigCaption = styled.figcaption<{ small?: boolean }>`
  ${flex({ justify: 'center', align: 'center' })};
  padding: 8px;
  position: absolute;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  top: ${({ small }) => (small ? 50 : 40)}%;
  cursor: pointer;
  @media (max-width: 500px) {
    display: none;
  }
`

const FigureCaptionLeft = styled(BaseFigCaption)<{ small?: boolean }>`
  left: ${({ small }) => (small ? 40 : 5)}%;

  @media (max-width: 1100px) {
    display: none;
  }

`
const FigureCaptionRight = styled(BaseFigCaption)<{ small?: boolean }>`
  right: ${({ small }) => (small ? 30.6 : 5)}%;
  @media (max-width: 1100px) {
    display: none;
  }
`

const IconForward = styled(ArrowForwardIosIcon)<{ small?: boolean }>`
  && {
    width: ${({ small }) => (small ? 35 : 50)}px;
    height: ${({ small }) => (small ? 35 : 50)}px;
    color: ${({ theme }) => theme.colors.primary};
    transition: all .4s ease-in;

    :hover {
      transform: translateX(10px);
    }

  }
`
const IconBack = styled(ArrowBackIosNewIcon)<{ small?: boolean }>`
  && {
    width: ${({ small }) => (small ? 35 : 50)}px;
    height: ${({ small }) => (small ? 35 : 50)}px;
    color: ${({ theme }) => theme.colors.primary};
    transition: all .4s ease-in;

    :hover {
      transform: translateX(-10px);
    }
  }
`

type TProps = {
  images: {
    url: string
    text: string | number
  }[]
  small?: boolean
}

const ImageSlider: FC<TProps> = ({ images, small }) => {
  const [current, setCurrent] = useState<number>(0)
  const imageLength: number = images.length

  useEffect(() => {
    const imageIndex = current === imageLength - 1 ? 0 : current
    const timer = setTimeout(() => setCurrent((prev) => {
      // eslint-disable-next-line no-multi-assign
      const next = prev += 1
      return next === imageLength ? 0 : next
    }), 5000)
    return () => clearTimeout(timer)
  }, [current])

  const nextImage = () =>
    setCurrent(current === imageLength - 1 ? 0 : current + 1)

  const prevImage = () =>
    setCurrent(current === 0 ? imageLength - 1 : current - 1)

  return (
    <SliderStyled small={small}>
      {images.map(
        ({ url, text }, index) =>
          index === current && (
            <ImageStyled
              key={text}
              className="slider__image"
              src={url}
              alt={text.toString()}
            />
          )
      )}
      <FigureCaptionLeft small={small}>
        <IconBack small={small} onClick={prevImage}/>
      </FigureCaptionLeft>
      <FigureCaptionRight small={small}>
        <IconForward small={small} onClick={nextImage}/>
      </FigureCaptionRight>
    </SliderStyled>
  )
}
export default ImageSlider
