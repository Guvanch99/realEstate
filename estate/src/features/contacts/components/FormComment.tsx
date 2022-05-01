import { useForm } from 'react-hook-form'
import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'
import { Alert, Snackbar } from '@mui/material'
import { useEffect, useState } from 'react'
import CustomInput from '../../../components/CustomInput'
import { emailValidation, minLengthRule, requiredRule } from '../../../components/utils/formUtils'
import CustomTextarea from '../../../components/CustomTextarea'
import Button, { BaseButton } from '../../../components/Button'
import { useContact } from '../queries'
import { TFormData } from '../types'
import { flex } from '../../../styles/mxins'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  ${flex({ justify: 'center', align: 'flex-start' })};

  ${BaseButton} {
    background: ${({ theme }) => theme.colors.blue500};
    color: ${({ theme }) => theme.colors.white};
    height: 40px;

    &:hover {
      background: ${({ theme }) => theme.colors.blue700};
    }
  }
`

const FormStyled = styled.form`
  margin-top: 24px;
  display: grid;
  grid-template-columns: minmax(300px, 450px);
  grid-row-gap: 16px;
`

const FormComment = () => {
  const { t } = useTranslation('translation')
  const [isToast, setToast] = useState(false)
  const { mutateAsync, isSuccess } = useContact()
  const { handleSubmit, control, reset } = useForm<TFormData>({
    defaultValues: {
      name: '',
      email: '',
      comment: ''
    }
  })
  useEffect(() => {
    if (isSuccess) setToast(true)
  }, [isSuccess])

  return (
    <Wrapper>
      <FormStyled onSubmit={handleSubmit((data) => {
        mutateAsync(data).then(() => {
          reset({
            name: '',
            email: '',
            comment: ''
          })
        })
      })}>
        <CustomInput
          type="text"
          name="name"
          control={control}
          placeholder={t('contactForm.name')}
          rules={{
            required: requiredRule(t('require')),
            minLength: minLengthRule(4)
          }}
        />
        <CustomInput
          name="email"
          control={control}
          placeholder={t('contactForm.email')}
          rules={{
            required: requiredRule(t('require')),
            validate: emailValidation
          }}
        />
        <CustomTextarea
          name="comment"
          control={control}
          placeholder={t('contactForm.comment')}
          rules={{
            required: requiredRule(t('require')),
            minLength: minLengthRule(15)
          }}
        />
        <Button text={t('submit')} type="submit"/>
      </FormStyled>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={isToast}
        onClose={() => setToast(false)}
        autoHideDuration={6000}>
        <Alert severity="success" sx={{ width: '100%' }}>{t('commentThank')}</Alert>
      </Snackbar>
    </Wrapper>
  )
}

export default FormComment
