import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import Card, { CardStyled } from '../../../components/Card'
import { WarningIcon } from '../../../components/icons/WarningIcon'
import { flex, fontFamily } from '../../../styles/mxins'
import Main from '../../main/components/Main'

const WrapperStyled = styled.div`
  ${flex({ justify: 'center', align: 'center' })};
  padding: 24px;

  ${CardStyled} {
    width: 100%;
    height: 784px;
  }
`

const ContentStyled = styled.div`
  ${flex({ justify: 'center', align: 'center' })};
  flex-direction: column;
  height: 100%;
`

const ErrorStatusStyled = styled.h1`
  ${fontFamily('Inter')};
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: ${({ theme }) => theme.colors.darkBlack};
  margin: 16px 0 8px 0;
`

const ErrorTextStyled = styled.p`
  ${fontFamily('Inter')};
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  width: 282px;
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

const PageNotFound = () => {
  const { t } = useTranslation('translation')
  const navigate = useNavigate()
  return (
    <Main>
      <WrapperStyled>
        <Card noPadding>
          <ContentStyled>
            <WarningIcon width={80} height={80}/>
            <ErrorStatusStyled>404</ErrorStatusStyled>
            <ErrorTextStyled>
              {t('error')}
            </ErrorTextStyled>
            <NavigationBackStyled onClick={() => navigate(-1)}>{t('goBack')}</NavigationBackStyled>
          </ContentStyled>
        </Card>
      </WrapperStyled>
    </Main>
  )
}

export default PageNotFound
