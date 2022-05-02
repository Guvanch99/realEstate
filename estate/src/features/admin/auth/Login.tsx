import { useForm } from 'react-hook-form'
import { Alert, FormControlLabel as Label, Snackbar } from '@mui/material'
import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components/macro'
import { useNavigate } from 'react-router-dom'
import CustomInput from '../../../components/CustomInput'
import { requiredRule } from '../../../utils/formUtils'
import { flex } from '../../../styles/mxins'
import Button, { BaseButton } from '../../../components/Button'
import { useAuthContext } from '../../auth/state/authGuard'

const Container = styled.div`
  ${flex({ justify: 'center', align: 'center' })};
  flex-direction: column;
  height: 100%;
  background: linear-gradient(63deg, rgba(0, 82, 217, 0.7) 0, #0052D9 100%);

  ${BaseButton} {
    padding: 10px;
    background: ${({ theme }) => theme.colors.blue500};
    color: ${({ theme }) => theme.colors.white};
  }
`

const FormStyled = styled.form`
  background: #fff;
  height: 300px;
  width: 300px;
  border-radius: 10px;
  ${flex({ justify: 'space-around', align: 'center' })};
  flex-direction: column;

`

const LoginAdmin = () => {
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const { setAdminAuth } = useAuthContext()
  const { handleSubmit, control } = useForm({
    defaultValues: {
      name: '',
      password: ''
    }
  })
  const onSubmit = (data: any) => {
    const { name, password } = data
    if (name === 'Admin' && password === 'admin123') {
      setAdminAuth(true)
      navigate('/admin')
    } else {
      setError(true)
    }
  }
  return (
    <Container>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <Label
          control={(
            <CustomInput
              size="small"
              name="name"
              control={control}
              placeholder="name"
              rules={{
                required: requiredRule('require')
              }}
            />
          )}
          label="Name"
          labelPlacement="top"/>
        <Label
          control={(
            <CustomInput
              size="small"
              type="password"
              name="password"
              control={control}
              placeholder="password"
              rules={{
                required: requiredRule('require')
              }}
            />
          )}
          label="Password"
          labelPlacement="top"/>
        <Button text="Enter" type="submit"/>
      </FormStyled>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={error}
        onClose={() => setError(false)}
        autoHideDuration={6000}>
        <Alert severity="warning" sx={{ width: '100%' }}>Invalid Credentials</Alert>
      </Snackbar>
    </Container>
  )
}
export default LoginAdmin
