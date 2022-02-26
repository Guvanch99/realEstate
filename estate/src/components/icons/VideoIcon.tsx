import { FC } from 'react'
import { ReactComponent as Icon } from './svg/video.svg'
import { IconWrapper } from '../../core/svg/base/IconWrapper'
import { TIconProps } from './type'

export const VideoIcon: FC<TIconProps> = (props) => (
  <IconWrapper {...props}>
    <Icon/>
  </IconWrapper>
)
