import styled from 'styled-components/macro'
import { useForm } from 'react-hook-form'
import { FormControlLabel as Label } from '@mui/material'
import { flex, fontFamily } from '../../../styles/mxins'
import Card, { CardStyled } from '../../../components/Card'
import CustomInput from '../../../components/CustomInput'
import { emailValidation, maxLengthRule, minLengthRule, passwordValidation, requiredRule } from '../../../utils/formUtils'
import Button, { BaseButton } from '../../../components/Button'
import { TFormData } from './type'

const RegistrationContainerStyled = styled.div`
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

const Register = () => {
  const { handleSubmit, control, setError } = useForm<TFormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  })
  // const { mutate, isError, error } = useLoginMutation()

  // if (isError) setError('email', { message: error?.message })
  return (
    <RegistrationContainerStyled>
      <Card>
        <ArticleStyled>
          <TitleStyled>Welcome to</TitleStyled>
        </ArticleStyled>

        <FormStyled onSubmit={handleSubmit((data) => {
          console.log()
          // mutate(data)
        })}>
          <Label
            control={(
              <CustomInput
                size="small"
                name="firstName"
                control={control}
                placeholder="firstName"
                rules={{
                  required: requiredRule('Please fill in all required fields.'),
                  minLength: minLengthRule(4),
                  maxLength: maxLengthRule(100)
                }}
              />
            )}
            label="Firstname"
            labelPlacement="top"
          />
          <Label
            control={(
              <CustomInput
                size="small"
                name="lastName"
                control={control}
                placeholder="lastName"
                rules={{
                  required: requiredRule('Please fill in all required fields.'),
                  minLength: minLengthRule(4),
                  maxLength: maxLengthRule(100)
                }}
              />
            )}
            label="Lastname"
            labelPlacement="top"/>
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

          <Button text="Register" type="submit"/>
        </FormStyled>
      </Card>
    </RegistrationContainerStyled>
  )
}

export default Register
