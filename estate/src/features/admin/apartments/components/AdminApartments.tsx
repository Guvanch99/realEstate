import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useApartmentsQuery } from '../../../apartments/queries'
import { NavigationBackStyled, SpinnerWrapper } from '../../comments/components/Commnets'
import Spinner from '../../../../components/Loader'
import ApartmentsTable from './Table'
import { ContentStyled, TableWrapper } from '../../booked-apartments/components/BookedApartments'

const AdminApartments = () => {
  const { t } = useTranslation('translation')
  const { data, isLoading } = useApartmentsQuery()
  const navigate = useNavigate()
  if (isLoading) {
    return (
      <SpinnerWrapper>
        <Spinner/>
      </SpinnerWrapper>
    )
  }

  if (!data) {
    return null
  }
  return (
    <ContentStyled>
      <NavigationBackStyled onClick={() => navigate(-1)}>{t('goBack')}</NavigationBackStyled>
      <TableWrapper>
        <ApartmentsTable tableData={data}/>
      </TableWrapper>
    </ContentStyled>

  )
}
export default AdminApartments
