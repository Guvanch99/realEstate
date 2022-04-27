import { FC } from 'react'
import styled from 'styled-components/macro'
import { Control, useController } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { flex } from '../styles/mxins'

const FormGroup = styled.div`
  ${flex({})};
  flex-direction: column;
`

const LinearProgressBar = styled.input`
  cursor: pointer;
`

const Label = styled.label`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.secondary};
`
type TProps = {
  maxPrice: number
  minPrice: number,
  control: Control<any>
}
const CustomProgressBar: FC<TProps> = ({
  maxPrice,
  minPrice,
  control
}) => {
  const {
    field: { value, onChange }
  } = useController({
    name: 'price',
    control
  })
  const { t } = useTranslation('translation')
  return (
    <FormGroup>
      <Label htmlFor="price">
        {`${t('roomPrice')} ${value}`}
      </Label>
      <LinearProgressBar
        value={value}
        onChange={onChange}
        type="range"
        min={minPrice}
        max={maxPrice}
        className="form-control"
      />
    </FormGroup>
  )
}

export default CustomProgressBar
