import {Content, Arrow} from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContent = styled(Content, {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  color: '$gray100',
})

export const TooltipArrow = styled(Arrow, {
  fill: '$gray900'
})