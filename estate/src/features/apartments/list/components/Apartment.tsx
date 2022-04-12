import { FC } from 'react'
import styled, { css } from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { TApartments } from '../types'
import { flex, fontFamily } from '../../../../styles/mxins'

const CardStyled = styled(NavLink)`
  ${flex({ justify: 'center', align: 'center' })};
  cursor: pointer;
  margin: 16px 0;
`

const ImageStyled = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
`

const ContentStyled = styled.div`
  ${flex({ justify: 'center', align: 'flex-start' })};
  flex-direction: column;
  height: 100%;
  margin-left: 20px;
`

const TextContentStyled = styled.div<TTextProps>`
  ${flex({})};
  ${fontFamily('Inter')};
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.secondary};
  ${({ margin }) => margin && css`
    margin: 20px 0;
  `}
`

const TextStyled = styled.p`
  margin-left: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

`

type TTextProps = {
  margin?: boolean
}
// todo Translate
const Apartment: FC<TApartments> = ({
  id,
  location,
  price,
  room,
  square,
  images,
  guest
}) => (
  <CardStyled to={`/apartment/${id}`}>
    <ImageStyled src={images[0]} alt={room}/>
    <ContentStyled>
      <TextContentStyled>
        Features:
        <TextStyled>
          {room}
          {' '}
          room -
          {square}
          m2
        </TextStyled>
      </TextContentStyled>
      <TextContentStyled>
        Guests:
        <TextStyled>
          {guest}
        </TextStyled>
      </TextContentStyled>
      <TextContentStyled margin>
        Price:
        <TextStyled>
          {price}
          {' '}
          rub/night
        </TextStyled>
      </TextContentStyled>
      <TextContentStyled>
        Location:
        <TextStyled>
          {location}
        </TextStyled>
      </TextContentStyled>
    </ContentStyled>

  </CardStyled>
)

export default Apartment
