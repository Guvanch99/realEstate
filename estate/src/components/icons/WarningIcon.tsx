import React, { FC } from 'react'
import { IconWrapper } from '../../core/svg/base/IconWrapper'
import { ReactComponent as Icon } from './svg/WarningFilled.svg'
import { TIconProps } from './type'

export const WarningIcon: FC<TIconProps> = (props) => (
  <IconWrapper {...props} >
    <Icon/>
  </IconWrapper>
)
