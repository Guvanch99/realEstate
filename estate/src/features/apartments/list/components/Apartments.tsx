import styled from 'styled-components/macro'
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
  ${flex({ justify: 'center', align: 'center' })};
  flex-direction: column;
`

const Apartments = () => {
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
      </ApartmentsStyled>
    </ContainerStyled>
  )
}

export default () => (
  <ApartmentsProvider>
    <Apartments/>
  </ApartmentsProvider>
)
