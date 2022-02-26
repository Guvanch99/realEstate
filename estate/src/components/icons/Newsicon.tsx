import { FC } from 'react'
import { ReactComponent as Icon } from './svg/news.svg'
import { IconWrapper } from '../../core/svg/base/IconWrapper'
import { TIconProps } from './type'

export const NewsIcon: FC<TIconProps> = (props) => (
  <IconWrapper {...props}>
    <Icon/>
  </IconWrapper>
)
