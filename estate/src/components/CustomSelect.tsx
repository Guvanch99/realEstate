import * as React from 'react'
import { FC } from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { Select as MuiSelect } from '@mui/material'
import styled from 'styled-components/macro'
import { flex, fontFamily } from '../styles/mxins'
import { SelectedIcon } from './icons/SelectIcon'

const Wrapper = styled.div`
  margin-top: 8px;
  width: 260px;

  && {
    .MuiOutlinedInput-root {
      height: 32px;
    }
  }
`

export const SelectMui = styled(MuiSelect)`
  && {
    ${fontFamily('Inter')};
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.darkBlack};

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
    color: ${({ theme }) => theme.colors.secondary};
    //max-width: 233px;
    &.Mui-selected {
      background: transparent;
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
  currentValue: TOption['value']
  handleChange: (option: string) => void
}

const CustomSelect: FC<TProps> = ({ options, currentValue, handleChange }) => (
  <Wrapper>
    <FormControl fullWidth>
      <SelectMui
        value={currentValue}
        onChange={({ target: { value } }) => handleChange(value as string)}
      >
        {
          options.map(({ label, value }) => {
            const isSelected = currentValue === value
            return (
              <MenuItemMui
                key={value}
                value={value}>
                <MenuItemContent>
                  {label}
                  {isSelected && <SelectedIcon/>}
                </MenuItemContent>
              </MenuItemMui>
            )
          })
        }
      </SelectMui>
    </FormControl>
  </Wrapper>
)

export default CustomSelect
