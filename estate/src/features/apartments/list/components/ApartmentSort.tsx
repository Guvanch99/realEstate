import styled from 'styled-components/macro'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import CustomSelect, { TOption } from '../../../../components/CustomSelect'
import { useApartmentsContext } from '../state/useApartments'

const sortOptions: TOption[] = [
  {
    label: 'notSelected',
    value: 'notSelected'
  },
  {
    label: 'priceLowest',
    value: 'priceLowest'
  },
  {
    label: 'priceHighest',
    value: 'priceHighest'
  },
  {
    label: 'nameA',
    value: 'nameAZ'
  },
  {
    label: 'nameZ',
    value: 'nameZA'
  }
]
const LabelStyled = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
`

const SortingContainer = styled.div`
  margin-left: 20px;
`

const ApartmentSort = () => {
  const { sort, setSort } = useApartmentsContext()
  const { t } = useTranslation('translation')
  const { control, watch } = useForm({
    defaultValues: {
      sort
    },
    mode: 'onChange'
  })
  useEffect(() => {
    setSort(watch('sort'))
  }, [watch('sort')])

  return (
    <SortingContainer>
      <LabelStyled>{t('sorting')}</LabelStyled>
      <CustomSelect label="sortAction" options={sortOptions} currentValue={sort} name="sort" control={control}/>
    </SortingContainer>
  )
}

export default ApartmentSort
