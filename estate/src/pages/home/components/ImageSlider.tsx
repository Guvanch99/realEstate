import * as React from 'react'
import styled from 'styled-components/macro'
import { FC, useEffect, useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

import { flex } from '../../../styles/mxins'
import { images } from '../data'

const SliderStyled = styled.figure`
  ${flex({ justify: 'center', align: 'center' })};
  height: 530px;
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

  &:hover {
    transform: scale(1.05);
  }
`

const BaseFigCaption = styled.figcaption`
  ${flex({ justify: 'center', align: 'center' })};
  padding: 8px;
  position: absolute;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  top: 40%;
  cursor: pointer;
  @media (max-width: 500px) {
    display: none;
  }
`

const FigureCaptionLeft = styled(BaseFigCaption)`
  left: 5%;

`
const FigureCaptionRight = styled(BaseFigCaption)`
  right: 5%;
`

const IconForward = styled(ArrowForwardIosIcon)`
  && {
    width: 50px;
    height: 50px;
    color: ${({ theme }) => theme.colors.white};
    transition: all .4s ease-in;

    :hover {
      transform: translateX(10px);
    }

  }
`
const IconBack = styled(ArrowBackIosNewIcon)`
  && {
    width: 50px;
    height: 50px;
    color: ${({ theme }) => theme.colors.white};
    transition: all .4s ease-in;

    :hover {
      transform: translateX(-10px);
    }
  }
`

const ImageSlider: FC = () => {
  const [current, setCurrent] = useState<number>(0)
  const imageLength: number = images.length

  useEffect(() => {
    const imageIndex = current === imageLength - 1 ? 0 : current
    console.log(imageIndex)
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
    <SliderStyled>
      {images.map(
        ({ url, text }, index) =>
          index === current && (
            <ImageStyled
              key={text}
              className="slider__image"
              src={url}
              alt={text}
            />
          )
      )}
      <FigureCaptionLeft>
        <IconBack onClick={prevImage}/>
      </FigureCaptionLeft>
      <FigureCaptionRight>
        <IconForward onClick={nextImage}/>
      </FigureCaptionRight>
    </SliderStyled>
  )
}
export default ImageSlider
