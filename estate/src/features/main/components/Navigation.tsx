import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'
import { flex } from '../../../styles/mxins'
import { CustomNavlink } from './Header'

const MenuStyled = styled.ul`
  ${flex({ justify: 'center', align: 'center' })}
`

const MenuListStyled = styled.li`
  margin: 0 10px;
`

const Navigation = () => {
  const { t } = useTranslation('translation')
  return (
    <MenuStyled>
      <MenuListStyled>
        <CustomNavlink end to="/">
          {t('navbar.home')}
        </CustomNavlink>
      </MenuListStyled>
      <MenuListStyled>
        <CustomNavlink end to="apartments">
          {t('navbar.apartments')}
        </CustomNavlink>
      </MenuListStyled>
      <MenuListStyled>
        <CustomNavlink end to="about">
          {t('navbar.about')}
        </CustomNavlink>
      </MenuListStyled>
      <MenuListStyled>
        <CustomNavlink end to="contacts">
          {t('navbar.contacts')}
        </CustomNavlink>
      </MenuListStyled>
    </MenuStyled>
  )
}

export default Navigation
