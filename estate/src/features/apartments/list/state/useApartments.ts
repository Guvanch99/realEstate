import constate from 'constate'
import { useSetState } from 'react-use'
import { useApartmentsQuery } from '../queries'

function useApartments() {
  const [filters, setFilters] = useSetState({
    room: 'ALL'
  })

  return {
    apartmentQuery: useApartmentsQuery()

  }
}

export const [
  ApartmentsProvider,
  useApartmentsContext
] = constate(useApartments)
