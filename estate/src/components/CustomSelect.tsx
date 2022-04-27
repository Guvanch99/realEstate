import * as React from 'react'
import { FC } from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { Select as MuiSelect } from '@mui/material'
import styled from 'styled-components/macro'
import { Control, useController } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { flex, fontFamily } from '../styles/mxins'

const Wrapper = styled.div`
  margin: 20px 0;
  width: 260px;

  && {
    .MuiOutlinedInput-root {
      height: 32px;
    }
  }
`

const Label = styled.label`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.secondary};
`

export const SelectMui = styled(MuiSelect)`
  && {
    ${fontFamily('Inter')};
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.secondary};

    & > .MuiSelect-select[aria-expanded='true'] ~ fieldset.MuiOutlinedInput-notchedOutline {
      border: 1px solid ${({ theme }) => theme.colors.blue500};

    }

    & > .MuiSelect-select:focus ~ fieldset.MuiOutlinedInput-notchedOutline {
      border: 1px solid ${({ theme }) => theme.colors.blue500};
    }

    & .hQwKMC > span {
      display: none;
    }
  }
`

const MenuItemMui = styled(MenuItem)`
  &&& {
    ${fontFamily('Inter')};
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    background: ${({ theme }) => theme.colors.grey300};
    color: ${({ theme }) => theme.colors.darkBlack};
    //max-width: 233px;
    &.Mui-selected {
      background: ${({ theme }) => theme.colors.blue700};
    }

    &:hover {
      background: transparent;
    }

    &.Mui-selected:hover {
      background: transparent;
    }
  }
`

const MenuItemContent = styled.div`
  ${flex({ justify: 'space-between', align: 'center' })};
  width: 100%;
`

export type TOption = {
  label: string
  value: string | number
}

type TProps = {
  options: TOption[]
  currentValue?: TOption['value']
  name: string
  control: Control<any>
  label?: string
}

const CustomSelect: FC<TProps> = ({ options, name, control, label }) => {
  const { field } = useController({
    name,
    control
  })
  const { t } = useTranslation('translation')
  return (
    <Wrapper>
      <Label>{t(label || '')}</Label>
      <FormControl fullWidth>
        <SelectMui
          {...field}
        >
          {
            options.map(({ label, value }) => (
              <MenuItemMui
                key={value}
                value={value}>
                <MenuItemContent>
                  {t(label)}
                </MenuItemContent>
              </MenuItemMui>
            ))
          }
        </SelectMui>
      </FormControl>
    </Wrapper>
  )
}

export default CustomSelect
