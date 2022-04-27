import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'
import { fontFamily } from '../../../styles/mxins'

const Container = styled.div`
  ${fontFamily('Inter')};
  margin: 0 auto;
  width: 100%;
  max-width: 700px;

`

const HeaderStyled = styled.h1`
  text-align: center;
  line-height: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
`
const BodyStyled = styled.p`
  margin-top: 16px;
  text-align: center;
  line-height: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary};
`

const FooterStyled = styled.p`
  margin-top: 24px;
  text-align: center;
  line-height: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.yellowChampain};
`

const Testimonial = () => {
  const { t } = useTranslation('translation')
  return (
    <Container>
      <HeaderStyled>{t('motto')}</HeaderStyled>
      <BodyStyled>
        {t('motto1')}
      </BodyStyled>
      <FooterStyled>
        {t('motto2')}
      </FooterStyled>
    </Container>
  )
}
export default Testimonial
