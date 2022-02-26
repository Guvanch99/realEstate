import { FC } from 'react'
import { ReactComponent as Icon } from './svg/transport.svg'
import { IconWrapper } from '../../core/svg/base/IconWrapper'
import { TIconProps } from './type'

export const TransportIcon: FC<TIconProps> = (props) => (
  <IconWrapper {...props}>
    <Icon/>
  </IconWrapper>
)
