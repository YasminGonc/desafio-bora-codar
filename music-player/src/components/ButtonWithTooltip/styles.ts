import * as Tooltip from '@radix-ui/react-tooltip'
import { keyframes, styled } from '../../styles'

const slideUpAndFade = keyframes({
  from: {
    transform: 'translateY(2px)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideRightAndFade = keyframes({
  from: {
    transform: 'translateX(-2px)',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const slideDownAndFade = keyframes({
  from: {
    transform: 'translateY(-2px)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideLeftAndFade = keyframes({
  from: {
    transform: 'translateX(2px)',
  },
  to: {
    transform: 'translateX(0)',
  },
})

export const TooltipContent = styled(Tooltip.Content, {
  padding: '0.625rem 0.9375rem',
  backgroundColor: '$purple300',
  borderRadius: '4px',

  color: '$gray',
  fontSize: '0.625rem',
  fontFamily: 'Roboto',

  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',

  '&[data-state="delayed-open"][data-side="top"]': {
    animation: `${slideDownAndFade} 200ms ease-out`,
  },

  '&[data-state="delayed-open"][data-side="right"]': {
    animation: `${slideLeftAndFade} 200ms ease-out`,
  },

  '&[data-state="delayed-open"][data-side="bottom"]': {
    animation: `${slideUpAndFade} 200ms ease-out`,
  },

  '&[data-state="delayed-open"][data-side="left"]': {
    animation: `${slideRightAndFade} 200ms ease-out`,
  },
})
