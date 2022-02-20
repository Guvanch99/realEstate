import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'
import { flex } from '../../../styles/mxins'

const FooterStyled = styled.footer`
  ${flex({ justify: 'center', align: 'center' })}
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 80px;
`

const TextStyled = styled.h2`
  padding: 25px 16px;
  color: ${({ theme }) => theme.colors.white};
`

const Footer = () => {
  const { t } = useTranslation('translation')
  return (
    <FooterStyled>
      <TextStyled>
        &copy;
        {t('footerText')}
      </TextStyled>
    </FooterStyled>
  )
}
export default Footer
