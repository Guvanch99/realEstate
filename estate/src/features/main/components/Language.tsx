import { useTranslation } from 'react-i18next'
import styled from 'styled-components/macro'
import LanguageIcon from '@mui/icons-material/Language'
import { flex, fontFamily } from '../../../styles/mxins'
import { useHeaderContext } from '../state/useHeader'

const Container = styled.div`
  ${flex({ justify: 'space-between', align: 'center' })};
  ${fontFamily('Inter')};
  margin: 0 10px;
`

const IconStyled = styled.label`
  ${flex({ justify: 'center', align: 'center' })};
  ${fontFamily('Inter')};
`

const SelectStyled = styled.select`
  border: none;
  outline: none;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.white};
`

const OptionStyled = styled.option`
  ${fontFamily('Inter')};
`

const Language = () => {
  const { t } = useTranslation('translation')
  const { changeLanguageHandler } = useHeaderContext()

  return (
    <Container>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <IconStyled>
        <LanguageIcon/>
      </IconStyled>
      <SelectStyled
        name="language"
        onChange={(e) => changeLanguageHandler(e)}
      >
        <OptionStyled value="en">
          {t('lang.en')}
        </OptionStyled>
        <OptionStyled value="ru">
          {t('lang.ru')}
        </OptionStyled>
      </SelectStyled>
    </Container>
  )
}

export default Language
