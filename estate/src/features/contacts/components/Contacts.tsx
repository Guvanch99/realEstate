import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'
import { flex } from '../../../styles/mxins'
import FormComment from './FormComment'
import GetInTouch from './GetInTouch'

const Container = styled.div`
  width: 100%;
  height: 100%;
  ${flex({ justify: 'center', align: 'center' })};
  flex-direction: column;
  margin: 0 16px;
`

const Title = styled.h1`
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  color: ${({ theme }) => theme.colors.secondary};
`

const Contacts = () => {
  const { t } = useTranslation('translation')
  return (
    <Container>
      <Title>{t('contactUs')}</Title>
      <FormComment/>
      <GetInTouch/>
    </Container>
  )
}

export default Contacts
