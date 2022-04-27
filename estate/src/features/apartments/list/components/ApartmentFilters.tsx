import { useForm } from 'react-hook-form'
import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'
import { useApartmentsContext } from '../state/useApartments'
import CustomSelect, { TOption } from '../../../../components/CustomSelect'
import CustomInput from '../../../../components/CustomInput'
import { floatFormat } from '../../../../utils/inputUtils'
import { maxRule, minRule, requiredRule } from '../../../../utils/formUtils'
import Button, { BaseButton } from '../../../../components/Button'
import CustomProgressBar from '../../../../components/CustomProgressBar'
import { flex } from '../../../../styles/mxins'
import { TFormData } from '../types'

const LabelStyled = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
`

const ContainerStyled = styled.div`
  margin-left: 20px;

  ${BaseButton} {
    margin-top: 20px;
    width: 100%;
    background: ${({ theme }) => theme.colors.blue500};
    color: ${({ theme }) => theme.colors.white};
    padding: 10px;

    :hover {
      background: ${({ theme }) => theme.colors.blue700};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`

const ProgressStyled = styled.div`
  ${flex({})};
  flex-direction: column;
  margin: 20px 0;
`

const FormGroup = styled.div`
  width: 260px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50px 10px;
  grid-gap: 20px;
  align-items: center;
`

const Label = styled.label`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.secondary};

`

const ApartmentFilters = () => {
  const {
    optionRoom,
    optionCapacity,
    maxPrice,
    minPrice,
    maxSizeRoom,
    minSizeRoom,
    onSubmit
  } = useApartmentsContext()
  const { handleSubmit, control } = useForm<TFormData>({
    defaultValues: {
      room: 'ALL',
      capacity: 1,
      price: maxPrice,
      minSize: minSizeRoom,
      maxSize: maxSizeRoom
    }
  })
  const { t } = useTranslation('translation')
  return (
    <ContainerStyled>
      <LabelStyled>{t('filters')}</LabelStyled>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          {t('filterRoom')}
        </Label>
        <CustomSelect
          options={optionRoom as TOption[]}
          name="room"
          control={control}
        />
        <Label>
          {t('filterGuest')}
        </Label>
        <CustomSelect
          name="capacity"
          control={control}
          options={optionCapacity as TOption[]}
        />
        <ProgressStyled>
          <CustomProgressBar
            control={control}
            minPrice={minPrice}
            maxPrice={maxPrice}/>
        </ProgressStyled>
        <Label>
          {t('size')}
          {' '}
          m2
        </Label>
        <FormGroup>
          <CustomInput
            style={{ marginTop: 1 }}
            name="minSize"
            control={control}
            placeholder={t('minSize')}
            handleChange={floatFormat}
            rules={{
              required: requiredRule('Required'),
              min: minRule(minSizeRoom, `${t('ruleMin')} ${minSizeRoom} `)
            }}
          />
          <CustomInput
            name="maxSize"
            control={control}
            placeholder={t('maxSize')}
            handleChange={floatFormat}
            rules={{
              required: requiredRule('Required'),
              max: maxRule(maxSizeRoom, `${t('ruleMax')} ${maxSizeRoom} `)
            }}
          />
        </FormGroup>
        <Button type="submit" text={t('apply')}/>
      </form>
    </ContainerStyled>
  )
}

export default ApartmentFilters
