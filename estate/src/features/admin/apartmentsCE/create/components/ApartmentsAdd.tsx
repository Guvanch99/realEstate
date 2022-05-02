import { useForm } from 'react-hook-form'
import styled from 'styled-components/macro'
import { FormControlLabel as Label } from '@mui/material'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { TFormApartment } from '../type'
import CustomInput from '../../../../../components/CustomInput'
import { requiredRule } from '../../../../../utils/formUtils'
import Button, { BaseButton } from '../../../../../components/Button'
import { NavigationBackStyled } from '../../../comments/components/Commnets'
import { ContentStyled } from '../../../booked-apartments/components/BookedApartments'
import { useAddApartments } from '../querries'

export const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 300px 300px;
  grid-row-gap: 16px;


  ${BaseButton} {
    margin-top: 30px;
    background: ${({ theme }) => theme.colors.blue500};
    color: ${({ theme }) => theme.colors.white};
    height: 40px;
    width: 270px;
    margin-left: 15px;

    &:hover {
      background: ${({ theme }) => theme.colors.blue700};
    }
  }
`

const ApartmentsAdd = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('translation')
  const { mutateAsync } = useAddApartments()
  const { handleSubmit, control, reset } = useForm<TFormApartment>({
    defaultValues: {
      id: '',
      room: '',
      square: '',
      price: '',
      guest: 1,
      location: '',
      description: '',
      images1: '',
      images2: '',
      images3: '',
      images4: ''
    }
  })
  return (
    <ContentStyled>
      <NavigationBackStyled onClick={() => navigate(-1)}>{t('goBack')}</NavigationBackStyled>
      <FormStyled onSubmit={handleSubmit((data) => {
        const {
          images1,
          images2,
          images3,
          images4,
          guest,
          ...others
        } = data
        const trueIsh = [images1, images2, images3, images4].filter(Boolean)
        const dataAddApartment = {
          ...others,
          guest: +guest,
          images: trueIsh,
          status: 'AVAILABLE'
        }

        mutateAsync({ data: dataAddApartment }).then(() => {
          reset({
            room: '',
            square: '',
            price: '',
            guest: 1,
            location: '',
            description: '',
            images1: '',
            images2: '',
            images3: '',
            images4: ''
          })
        })
      })}>
        <Label
          control={(
            <CustomInput
              size="small"
              name="room"
              control={control}
              placeholder="room"
              rules={{
                required: requiredRule('require')
              }}
            />
          )}
          label="room"
          labelPlacement="top"/>
        <Label
          control={(
            <CustomInput
              size="small"
              name="square"
              control={control}
              placeholder="square"
              rules={{
                required: requiredRule('require')
              }}
            />
          )}
          label="square"
          labelPlacement="top"/>
        <Label
          control={(
            <CustomInput
              size="small"
              name="price"
              control={control}
              placeholder="price"
              rules={{
                required: requiredRule('require')
              }}
            />
          )}
          label="price"
          labelPlacement="top"/>
        <Label
          control={(
            <CustomInput
              size="small"
              name="guest"
              control={control}
              placeholder="guest"
              rules={{
                required: requiredRule('require')
              }}
            />
          )}
          label="guest"
          labelPlacement="top"/>
        <Label
          control={(
            <CustomInput
              size="small"
              name="location"
              control={control}
              placeholder="location"
              rules={{
                required: requiredRule('require')
              }}
            />
          )}
          label="location"
          labelPlacement="top"/>
        <Label
          control={(
            <CustomInput
              size="small"
              name="description"
              control={control}
              placeholder="description"
              rules={{
                required: requiredRule('require')
              }}
            />
          )}
          label="description"
          labelPlacement="top"/>
        <Label
          control={(
            <CustomInput
              size="small"
              name="images1"
              control={control}
              placeholder="images1"
              rules={{
                required: requiredRule('require')
              }}
            />
          )}
          label="images1"
          labelPlacement="top"/>
        <Label
          control={(
            <CustomInput
              size="small"
              name="images2"
              control={control}
              placeholder="images2"
            />
          )}
          label="images2"
          labelPlacement="top"/>
        <Label
          control={(
            <CustomInput
              size="small"
              name="images3"
              control={control}
              placeholder="images3"
            />
          )}
          label="images3"
          labelPlacement="top"/>
        <Label
          control={(
            <CustomInput
              size="small"
              name="images4"
              control={control}
              placeholder="images4"
            />
          )}
          label="images4"
          labelPlacement="top"/>
        <Button text="Submit" type="submit"/>
      </FormStyled>
    </ContentStyled>
  )
}

export default ApartmentsAdd
