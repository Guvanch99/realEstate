import * as React from 'react'
import styled from 'styled-components/macro'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Spinner from '../../../../components/Loader'
import { NavigationBackStyled, SpinnerWrapper } from '../../comments/components/Commnets'
import { flex } from '../../../../styles/mxins'
import ApartmentTable from './Table'
import { useBookedApartments } from '../querries'

export const ContentStyled = styled.div`
  ${flex({ justify: 'center', align: 'center' })};
  margin: 0 auto;
  height: 100%;
  background: ${({ theme }) => theme.colors.lightBlue};
  flex-direction: column;
`

export const TableWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
`
const BookedApartments = () => {
  const { data, isLoading } = useBookedApartments()
  const navigate = useNavigate()
  const { t } = useTranslation('translation')

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
        <ApartmentTable tableData={data}/>
      </TableWrapper>
    </ContentStyled>
  )
}

export default BookedApartments
