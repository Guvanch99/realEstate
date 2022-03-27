import { useForm } from 'react-hook-form'
import styled from 'styled-components/macro'
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
  const { mutateAsync } = useContact()
  const { handleSubmit, control, reset } = useForm<TFormData>({
    defaultValues: {
      name: '',
      email: '',
      comment: ''
    }
  })
  return (
    <Wrapper>
      <FormStyled onSubmit={handleSubmit((data) => {
        console.log('data', data)
        // mutateAsync(data).then(() => {
        //   reset({
        //     name: '',
        //     email: '',
        //     comment: ''
        //   })
        // })
      })}>
        <CustomInput
          type="text"
          name="name"
          control={control}
          placeholder="Name"
          rules={{
            required: requiredRule('Please fill in all required fields.'),
            minLength: minLengthRule(4)
          }}
        />
        <CustomInput
          name="email"
          control={control}
          placeholder="Email"
          rules={{
            required: requiredRule('Please fill in all required fields.'),
            validate: emailValidation
          }}
        />
        <CustomTextarea
          name="comment"
          control={control}
          placeholder="Comment"
          rules={{
            required: requiredRule('Please fill in all required fields.'),
            minLength: minLengthRule(15)
          }}
        />
        <Button text="Submit" type="submit"/>
      </FormStyled>
    </Wrapper>
  )
}

export default FormComment
