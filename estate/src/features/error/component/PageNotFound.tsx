import styled from 'styled-components/macro'
import Card, { CardStyled } from '../../../components/Card'
import { WarningIcon } from '../../../components/icons/WarningIcon'
import { flex, fontFamily } from '../../../styles/mxins'

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

const PageNotFound = () => (
  <WrapperStyled>
    <Card noPadding>
      <ContentStyled>
        <WarningIcon width={80} height={80}/>
        <ErrorStatusStyled>404</ErrorStatusStyled>
        <ErrorTextStyled>
          The page you are looking for was moved, removed, renamed or might never existed
        </ErrorTextStyled>
      </ContentStyled>
    </Card>
  </WrapperStyled>
)

export default PageNotFound
