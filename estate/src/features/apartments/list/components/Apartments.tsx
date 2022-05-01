import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'
import Spinner from '../../../../components/Loader'
import { ApartmentsProvider, useApartmentsContext } from '../state/useApartments'
import Apartment from './Apartment'
import ApartmentFilters from './ApartmentFilters'
import { flex } from '../../../../styles/mxins'
import ApartmentSort from './ApartmentSort'

const ContainerStyled = styled.div`
  ${flex({})};
`

const OperationStyled = styled.div`
  position: fixed;
`

const ApartmentsStyled = styled.div`
  width: 100%;
  height: 100%;
  ${flex({ justify: 'center', align: 'center' })};
  flex-direction: column;
`

const NoDataText = styled.h1`
  margin: 20%;
  ${flex({ justify: 'center', align: 'center' })};

`

const Apartments = () => {
  const { t } = useTranslation('translation')
  const { apartments, isIdle, isLoading } = useApartmentsContext()
  if (isIdle || isLoading || !apartments) {
    return <Spinner/>
  }

  return (
    <ContainerStyled>
      <OperationStyled>
        <ApartmentSort/>
        <ApartmentFilters/>
      </OperationStyled>
      <ApartmentsStyled>
        {apartments.map((params) => <Apartment {...params}/>)}
        {!apartments.length && (
          <NoDataText>{t('noData')}</NoDataText>
        )}
      </ApartmentsStyled>
    </ContainerStyled>
  )
}

export default () => (
  <ApartmentsProvider>
    <Apartments/>
  </ApartmentsProvider>
)
