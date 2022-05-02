import styled from 'styled-components/macro'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import { useTranslation } from 'react-i18next'
import { Testimonials } from '../data'
import { flex } from '../../../styles/mxins'

const Wrapper = styled.div`
  width: 100%;
  ${flex({ justify: 'space-around', align: 'center' })};
  flex-wrap: wrap;
`

const ContainerStyled = styled.div`
  ${flex({ justify: 'space-around', align: 'center' })};
  flex-direction: column;
  height: 200px;
  width: 200px;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  cursor: pointer;


  :hover {
    transform: scale(1.1);
    transition: all .4s ease-in;
  }
`

const TitleStyled = styled.h1`
  margin: 16px 0;
  font-weight: 700;
  font-size: 28px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.secondary};
`

const ContentStyled = styled.div`
  ${flex({ justify: 'center', align: 'center' })};
  flex-direction: column;


`

const TextStyled = styled.p`
  color: ${({ theme }) => theme.colors.darkBlack};
  font-size: 16px;
  line-height: 24px;
`

const IconStyled = styled.div`
  & svg {
    font-size: 50px;
    color: ${({ theme }) => theme.colors.blue500};
  }
`

const GetInTouch = () => {
  const icons = {
    ADDRESS: <IconStyled><LocationOnIcon/></IconStyled>,
    PHONE: <IconStyled><PhoneIcon/></IconStyled>,
    EMAIL: <IconStyled><EmailIcon/></IconStyled>
  }
  const { t } = useTranslation('translation')
  return (
    <Wrapper>
      {
        Testimonials.map(({ title, content, type }) => (
          <ContainerStyled>
            <ContentStyled>
              {icons[type]}
              <TitleStyled>{t(title)}</TitleStyled>
            </ContentStyled>
            <TextStyled>{t(content)}</TextStyled>
          </ContainerStyled>
        ))
      }
    </Wrapper>
  )
}

export default GetInTouch
