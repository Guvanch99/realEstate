import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { flex, fontFamily } from '../../../styles/mxins'
import Switch from './Switch'
import Language from './Language'
import { HeaderProvider } from '../state/useHeader'
import Navigation from './Navigation'
import { LogoIcon } from '../../../core/svg/icons/LogoIcon'
import { useAuthContext } from '../../auth/state/authGuard'

const HeaderStyled = styled.header`
  ${flex({ justify: 'space-between', align: 'center' })};
  padding: 0 16px;
`
const LogoStyled = styled.div`
  width: 150px;
  height: 100px;
  color: ${({ theme }) => theme.colors.secondary};
`

export const CustomNavlink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.secondary};

  :hover {
    color: ${({ theme }) => theme.colors.orange};
  }

  &[class*="active"] {
    color: ${({ theme }) => theme.colors.yellowChampain};
  }
`

const LogoutStyled = styled.button`
  ${fontFamily('Inter')};
  border: none;
  padding: 8px 10px;
  border-radius: 6px;
  cursor: pointer;
`

const AuthContainer = styled.div`
  ${flex({ justify: 'center', align: 'center' })};

  & > :first-child {
    margin-right: 16px;
  }
`

const Header = () => {
  const { t } = useTranslation('translation')
  const { authData, removeAuthData } = useAuthContext()

  return (
    <HeaderStyled>
      <CustomNavlink end to="/">
        <LogoStyled>
          <LogoIcon/>
        </LogoStyled>
      </CustomNavlink>
      <Navigation/>
      <Switch/>
      <Language/>
      <AuthContainer>
        {
          authData?.uid
            ? (
              <LogoutStyled onClick={removeAuthData}>
                {t('logout')}
              </LogoutStyled>
            )
            : (
              <>
                <CustomNavlink to="login">
                  {t('auth.signIn')}
                </CustomNavlink>
                <CustomNavlink to="register">
                  {t('auth.signUp')}
                </CustomNavlink>
              </>
            )
        }

      </AuthContainer>
    </HeaderStyled>
  )
}

export default () => (
  <HeaderProvider>
    <Header/>
  </HeaderProvider>
)
