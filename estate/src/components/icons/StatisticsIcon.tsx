import { FC } from 'react'
import { ReactComponent as Icon } from './svg/statistics.svg'
import { IconWrapper } from '../../core/svg/base/IconWrapper'
import { TIconProps } from './type'

export const StatisticsIcon: FC<TIconProps> = (props) => (
  <IconWrapper {...props}>
    <Icon/>
  </IconWrapper>
)
