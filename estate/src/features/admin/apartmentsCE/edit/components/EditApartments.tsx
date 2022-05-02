import * as React from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { FormControlLabel as Label } from '@mui/material'
import styled from 'styled-components/macro'
import { NavigationBackStyled } from '../../../comments/components/Commnets'
import { useDeleteApartment, useEditApartment } from '../querries'
import CustomInput from '../../../../../components/CustomInput'
import { requiredRule } from '../../../../../utils/formUtils'
import Button, { BaseButton } from '../../../../../components/Button'
import { useApartmentQuery } from '../../../../apartments/queries'
import { ContentStyled } from '../../../booked-apartments/components/BookedApartments'
import CustomSelect from '../../../../../components/CustomSelect'

const FormStyled = styled.form`
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

const CustomSelectStyled = styled.div`
  margin-top: 16px;
  margin-left: 16px;
`

const DeleteButton = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.red};
  border-radius: 6px;
  border: none;
  margin-top: 30px;
  height: 40px;
  width: 270px;
  margin-left: 16px;
  cursor: pointer;
`

const options = [
  { label: 'available', value: 'AVAILABLE' },
  { label: 'booked', value: 'BOOKED' }
]
const EditApartments = () => {
  const { id } = useParams()
  const { mutateAsync } = useEditApartment()
  const { mutateAsync: deleteMutation } = useDeleteApartment()
  const navigate = useNavigate()
  const { t } = useTranslation('translation')
  const { data, refetch } = useApartmentQuery(id)
  const { handleSubmit, control, reset } = useForm()

  useEffect(() => {
    if (data) {
      reset({
        id: data.id,
        room: data.room,
        square: data.square,
        price: data.price,
        guest: Number(data.guest),
        location: data.location,
        status: data.status,
        description: data.description,
        images1: data.images[0] || '',
        images2: data.images[1] || '',
        images3: data.images[2] || '',
        images4: data.images[3] || ''
      })
    }
  }, [data])
  if (!data) {
    return <></>
  }
  const handleDelete = () =>
    deleteMutation(data.id).then(() => navigate(-1))

  return (
    <ContentStyled>
      <NavigationBackStyled onClick={() => navigate(-1)}>{t('goBack')}</NavigationBackStyled>
      <FormStyled onSubmit={handleSubmit((formData) => {
        const {
          images1,
          images2,
          images3,
          images4,
          guest,
          ...others
        } = formData
        const trueIsh = [images1, images2, images3, images4].filter(Boolean)
        const editData = {
          ...others,
          guest: +guest,
          trueIsh
        }
        mutateAsync({ id: data.id, editData }).then(() => refetch())
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
        <CustomSelectStyled>
          <CustomSelect options={options} name="status" control={control}/>
        </CustomSelectStyled>

        <Button text="Edit" type="submit"/>
      </FormStyled>
      <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
    </ContentStyled>
  )
}

export default EditApartments
