import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'
import ImgFirst from '../assets/img1.jpeg'
import ImgSecond from '../assets/img2.jpeg'
import ImgThird from '../assets/img3.jpeg'
import ImgFourth from '../assets/img4.jpeg'
import { flex } from '../../../styles/mxins'

const Wrapper = styled.div`
  max-width: 1250px;
  margin: 0 auto;
`

const ContainerTestimonail = styled.div`
  margin-top: 32px;
  ${flex({ justify: 'center' })};
  flex-direction: column;
  flex-wrap: wrap;
`

const LabelStyled = styled.h1`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  line-height: 18px;
  border-bottom: 3px solid ${({ theme }) => theme.colors.yellow500};
  color: ${({ theme }) => theme.colors.secondary};
`

const ImageContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const ImgStyled = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
  border-radius: 20px;
  transition: all 1s ease-in;
  cursor: pointer;

  :hover {
    transform: scale(1.1) rotate(3deg) translate(10px, 20px);
    transition: all .4s ease-in-out;
  }

`

const TextStyled = styled.div`
  ${flex({ justify: 'center', align: 'center' })};
  height: 100%;
  color: ${({ theme }) => theme.colors.secondary};

  :hover {
    transform: scale(1.2);
    transition: all .4s ease-in-out;
  }
`

const Testimonials = () => {
  const { t } = useTranslation('translation')
  return (
    <Wrapper>
      <LabelStyled>{t('ourClients')}</LabelStyled>
      <ContainerTestimonail>
        <ImageContainerStyled>
          <ImgStyled src={ImgFirst} alt="img1"/>
          <TextStyled>{t('clientComment')}</TextStyled>
        </ImageContainerStyled>
        <ImageContainerStyled>
          <TextStyled>{t('clientComment')}</TextStyled>
          <ImgStyled src={ImgSecond} alt="img2"/>
        </ImageContainerStyled>
        <ImageContainerStyled>
          <ImgStyled src={ImgThird} alt="img3"/>
          <TextStyled>{t('clientComment')}</TextStyled>
        </ImageContainerStyled>
        <ImageContainerStyled>
          <TextStyled>{t('clientComment')}</TextStyled>
          <ImgStyled src={ImgFourth} alt="img4"/>
        </ImageContainerStyled>
      </ContainerTestimonail>
    </Wrapper>
  )
}

export default Testimonials
