import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LogoImg from '../assets/logo.png'
import { flex } from '../../../styles/mxins'
import Switch from './Switch'
import Language from './Language'
import { HeaderProvider } from '../state/useHeader'
import Navigation from './Navigation'

const HeaderStyled = styled.header`
  ${flex({ justify: 'space-between', align: 'center' })};
  padding: 0 16px;
`
const LogoStyled = styled.img`
  width: 150px;
  height: 100px;
  object-fit: contain;
`

export const CustomNavlink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.secondary};

  :hover {
    color: ${({ theme }) => theme.colors.orange};
  }

  &[class*="active"] {
    color: ${({ theme }) => theme.colors.blue500};
  }
`

const AuthContainer = styled.div`
  ${flex({ justify: 'center', align: 'center' })};

  & > :first-child {
    margin-right: 16px;
  }
`

const Header = () => {
  const { t } = useTranslation('translation')
  return (
    <HeaderStyled>
      <CustomNavlink end to="/">
        <LogoStyled src={LogoImg} alt="logo"/>
      </CustomNavlink>
      <Navigation/>
      <Switch/>
      <Language/>
      <AuthContainer>
        <CustomNavlink to="sign-in">
          {t('auth.signIn')}
        </CustomNavlink>
        <CustomNavlink to="sign-up">
          {t('auth.signUp')}
        </CustomNavlink>
      </AuthContainer>
    </HeaderStyled>
  )
}

export default () => (
  <HeaderProvider>
    <Header/>
  </HeaderProvider>
)
