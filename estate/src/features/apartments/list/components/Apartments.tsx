import styled from 'styled-components/macro'
import Spinner from '../../../../components/Loader'
import { useApartmentsQuery } from '../queries'
import { ApartmentsProvider } from '../state/useApartments'
import Apartment from './Apartment'
import ApartmentFilters from './ApartmentFilters'
import { flex } from '../../../../styles/mxins'

const ContainerStyled = styled.div`
  ${flex({})};
`

const ApartmentsStyled = styled.div`
  width: 100%;
  ${flex({ justify: 'center', align: 'center' })};
  flex-direction: column;
`

const Apartments = () => {
  const { data, isIdle, isLoading } = useApartmentsQuery()
  if (isIdle || isLoading || !data) {
    return <Spinner/>
  }

  return (
    <ContainerStyled>
      <ApartmentFilters/>
      <ApartmentsStyled>
        {data.map((params) => <Apartment {...params}/>)}
      </ApartmentsStyled>

    </ContainerStyled>
  )
}

export default () => (
  <ApartmentsProvider>
    <Apartments/>
  </ApartmentsProvider>
)
