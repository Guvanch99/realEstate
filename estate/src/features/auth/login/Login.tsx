import { useForm } from 'react-hook-form'
import styled from 'styled-components/macro'
import { FormControlLabel as Label } from '@mui/material'
import { TFormData } from './type'
import { flex, fontFamily } from '../../../styles/mxins'
import Button, { BaseButton } from '../../../components/Button'
import CustomInput from '../../../components/CustomInput'
import { emailValidation, minLengthRule, passwordValidation, requiredRule } from '../../../utils/formUtils'
import Card, { CardStyled } from '../../../components/Card'

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
  const { handleSubmit, control, setError } = useForm<TFormData>({
    defaultValues: {
      email: '',
      password: ''
    }
  })
  // const { mutate, isError, error } = useLoginMutation()

  // if (isError) setError('email', { message: error?.message })

  return (
    <LoginContainerStyled>
      <Card>
        <ArticleStyled>
          <TitleStyled>Login</TitleStyled>
        </ArticleStyled>
        <FormStyled onSubmit={handleSubmit((data) => {
          console.log()
          // mutate(data)
        })}>
          <Label
            control={(
              <CustomInput
                size="small"
                name="email"
                control={control}
                placeholder="Email"
                rules={{
                  required: requiredRule('Please fill in all required fields.'),
                  validate: emailValidation
                }}
              />
            )}
            label="Email"
            labelPlacement="top"/>
          <Label
            control={(
              <CustomInput
                type="password"
                size="small"
                name="password"
                control={control}
                placeholder="Password"
                rules={{
                  required: requiredRule('Please fill in all required fields.'),
                  minLength: minLengthRule(8),
                  validate: passwordValidation
                }}
              />
            )}
            label="Password"
            labelPlacement="top"/>
          <Button text="Log in" type="submit"/>
        </FormStyled>
      </Card>
    </LoginContainerStyled>
  )
}

export default Login
