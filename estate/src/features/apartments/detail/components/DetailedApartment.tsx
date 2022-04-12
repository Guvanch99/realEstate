import { useParams } from 'react-router-dom'
import styled, { css } from 'styled-components/macro'
import { useApartmentQuery } from '../../list/queries'
import Loader from '../../../../components/Loader'
import ImageSlider from '../../../../components/ImageSlider'
import { flex, fontFamily } from '../../../../styles/mxins'
import { BaseButton } from '../../../../components/Button'
import Modal from './Modal'
import { DetailedApartmentProvider, useApartmentContext } from '../state/useDetailedApartment'

const Wrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
`

const TitleStyled = styled.h1`
  text-align: center;
  font-weight: bold;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.secondary};
`

const ContainerStyled = styled.div`
  ${flex({ justify: 'space-evenly', align: 'center' })};
  width: 100%;
  height: 100%;
`

const ImageContainer = styled.div`
  width: 300px;
`

const ContentStyled = styled.div``

const TextContentStyled = styled.div<{ margin?: boolean }>`
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

const ButtonBook = styled(BaseButton)`
  && {
    padding: 10px 20px;
    background: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    width: 100px;
    justify-self: center;
    align-self: center;

    :hover {
      background: ${({ theme }) => theme.colors.red};
    }
  }
`

const DetailedApartment = () => {
  const { id } = useParams()
  const { data: apartment, isIdle, isLoading } = useApartmentQuery(id)
  const { setModal } = useApartmentContext()
  if (!apartment || isIdle || isLoading) {
    return <Loader/>
  }

  const { price, description, guest, location, room, square, images } = apartment

  const imagesFormatted = images.map((url, idx) => ({
    url,
    text: idx
  }))

  return (
    <Wrapper>
      <TitleStyled>Detailed Info</TitleStyled>
      <ContainerStyled>
        <ImageContainer>
          <ImageSlider
            small
            images={imagesFormatted}/>
        </ImageContainer>
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
          <TextContentStyled margin>
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
          <TextContentStyled margin>
            Description:
            <TextStyled>
              {description}
            </TextStyled>
          </TextContentStyled>
        </ContentStyled>
      </ContainerStyled>
      <ButtonBook onClick={() => setModal(true)}>Book</ButtonBook>
      <Modal/>
    </Wrapper>
  )
}

export default () => (
  <DetailedApartmentProvider>
    <DetailedApartment/>
  </DetailedApartmentProvider>
)
