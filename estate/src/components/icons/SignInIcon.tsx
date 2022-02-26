import { FC } from 'react'
import { ReactComponent as Icon } from './svg/sign-in.svg'
import { IconWrapper } from '../../core/svg/base/IconWrapper'
import { TIconProps } from './type'

export const SignInIcon: FC<TIconProps> = (props) => (
  <IconWrapper {...props}>
    <Icon/>
  </IconWrapper>
)
