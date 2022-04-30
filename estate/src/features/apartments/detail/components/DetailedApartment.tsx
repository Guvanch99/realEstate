import { useNavigate, useParams } from 'react-router-dom'
import styled, { css } from 'styled-components/macro'
import { useTranslation } from 'react-i18next'
import { useApartmentQuery } from '../../queries'
import Loader from '../../../../components/Loader'
import ImageSlider from '../../../../components/ImageSlider'
import { flex, fontFamily } from '../../../../styles/mxins'
import { BaseButton } from '../../../../components/Button'
import Modal from './Modal'
import { DetailedApartmentProvider, useApartmentContext } from '../state/useDetailedApartment'
import ModalSuccess from './ModalSuccess'

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

const NavigationBackStyled = styled.div`
  text-align: center;
  padding: 10px;
  color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.blue200};
  cursor: pointer;
  width: 100px;
  margin: 40px auto;
  border-radius: 10px;
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
  max-width: 300px;
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
    width: 150px;
    justify-self: center;
    align-self: center;

    :hover {
      background: ${({ theme }) => theme.colors.red};
    }
  }
`

const DetailedApartment = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('translation')
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
      <NavigationBackStyled onClick={() => navigate(-1)}>Go Back</NavigationBackStyled>
      <TitleStyled>{t('detailedInfo')}</TitleStyled>
      <ContainerStyled>
        <ImageContainer>
          <ImageSlider
            small
            images={imagesFormatted}/>
        </ImageContainer>
        <ContentStyled>
          <TextContentStyled>
            {t('features')}
            <TextStyled>
              {room}
              {' '}
              {t('room')}
              {' '}
              -
              {square}
              m2
            </TextStyled>
          </TextContentStyled>
          <TextContentStyled margin>
            {t('guests')}
            <TextStyled>
              {guest}
            </TextStyled>
          </TextContentStyled>
          <TextContentStyled margin>
            {t('price')}
            <TextStyled>
              {price}
              {' '}
              {t('priceFraction')}
            </TextStyled>
          </TextContentStyled>
          <TextContentStyled>
            {t('location')}
            <TextStyled>
              {location}
            </TextStyled>
          </TextContentStyled>
          <TextContentStyled margin>
            {t('description')}
            <TextStyled>
              {t(description)}
            </TextStyled>
          </TextContentStyled>
        </ContentStyled>
      </ContainerStyled>
      <ButtonBook onClick={() => setModal(true)}>{t('book')}</ButtonBook>
      <Modal apartmentPrice={price}/>
      <ModalSuccess/>
    </Wrapper>
  )
}

export default () => (
  <DetailedApartmentProvider>
    <DetailedApartment/>
  </DetailedApartmentProvider>
)
