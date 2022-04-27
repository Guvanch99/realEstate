import { useForm } from 'react-hook-form'
import styled from 'styled-components/macro'
import { FormControlLabel as Label } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { TFormData } from './type'
import { flex, fontFamily } from '../../../styles/mxins'
import Button, { BaseButton } from '../../../components/Button'
import CustomInput from '../../../components/CustomInput'
import { emailValidation, minLengthRule, passwordValidation, requiredRule } from '../../../utils/formUtils'
import Card, { CardStyled } from '../../../components/Card'
import { useRegisterMutation } from './querie'

const LoginContainerStyled = styled.section`
  ${flex({ justify: 'center', align: 'center' })};
  flex-direction: column;
  height: 100%;
  background: linear-gradient(63deg, rgba(0, 82, 217, 0.7) 0, #0052D9 100%);

  ${CardStyled} {
    padding: 48px;
    border: 1px solid ${({ theme }) => theme.colors.grey300};
    box-shadow: 0 4px 30px rgba(0, 82, 217, 0.5);
    border-radius: 9px;
    height: min-content;
  }

  ${BaseButton} {
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

const TitleStyled = styled.h1`
  ${fontFamily('Inter')};
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  color: ${({ theme }) => theme.colors.darkBlack};
`

const ArticleStyled = styled.div`
  width: 100%;
  ${flex({ justify: 'center', align: 'center' })};
  flex-direction: column;
  margin-bottom: 10px;
`

const FormStyled = styled.form`
  width: 300px;
  display: grid;
  grid-template-columns: 300px;
  grid-row-gap: 16px;
`

const Login = () => {
  const { t } = useTranslation('translation')
  const { handleSubmit, control, setError } = useForm<TFormData>({
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const navigate = useNavigate()
  const { mutate, isError, error } = useRegisterMutation()

  if (isError) setError('email', { message: error?.message })

  return (
    <LoginContainerStyled>
      <Card>
        <ArticleStyled>
          <TitleStyled>{t('register')}</TitleStyled>
        </ArticleStyled>
        <FormStyled onSubmit={handleSubmit((data) => {
          console.log('data', data)
          mutate(data)
        })}>
          <Label
            control={(
              <CustomInput
                size="small"
                name="email"
                control={control}
                placeholder={t('contactForm.email')}
                rules={{
                  required: requiredRule(t('require')),
                  validate: emailValidation
                }}
              />
            )}
            label={t('contactForm.email') as string}
            labelPlacement="top"/>
          <Label
            control={(
              <CustomInput
                type="password"
                size="small"
                name="password"
                control={control}
                placeholder={t('password')}
                rules={{
                  required: requiredRule(t('require')),
                  minLength: minLengthRule(8),
                  validate: passwordValidation
                }}
              />
            )}
            label={t('password') as string}
            labelPlacement="top"/>
          <Button text={t('signUp')} type="submit"/>
        </FormStyled>
      </Card>
    </LoginContainerStyled>
  )
}

export default Login
