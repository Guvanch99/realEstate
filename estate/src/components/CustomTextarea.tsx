import { Control, useController } from 'react-hook-form'
import { RegisterOptions } from 'react-hook-form/dist/types/validator'
import { FC } from 'react'
import styled, { css } from 'styled-components/macro'

const TextareaStyled = styled.textarea<{ error: boolean }>`
  width: 100%;
  height: 150px;
  resize: none;
  padding: 0 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.darkBlack};
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.grey500};

  ::placeholder {
    color: ${({ theme }) => theme.colors.grey600a6};
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  }

  ${({ error }) => error && css`
    border: 1px solid ${({ theme }) => theme.colors.red};
  `}
`

const ErrorTextStyled = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-size: 14px;
  line-height: 24px;
  margin: 0;
`

type TProps = {
  name: string
  control: Control<any>
  placeholder: string
  rules?: RegisterOptions
}

const CustomTextarea: FC<TProps> = ({
  control,
  name,
  rules,
  placeholder
}) => {
  const {
    field,
    formState: { errors }
  } = useController({
    name,
    control,
    rules
  })

  return (
    <div>
      <TextareaStyled
        {...field}
        placeholder={placeholder}
        error={!!errors[name]}
      />
      <ErrorTextStyled>{errors[name] ? errors[name].message : ''}</ErrorTextStyled>
    </div>
  )
}

export default CustomTextarea
