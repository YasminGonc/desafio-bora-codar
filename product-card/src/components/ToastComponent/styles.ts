import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

const hideAnimation = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

const slideInAnimation = keyframes({
  from: {
    transform: 'translateX(calc(100% + 2rem))',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const swipeOutAnimation = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  to: {
    transform: 'translateX(calc(100% + 2rem))',
  },
})

export const ToastRoot = styled(Toast.Root, {
  backgroundColor: '$text',
  borderRadius: '8px',
  color: '$purple100',
  padding: '2rem',

  '&[data-state="open"]': {
    animation: `${slideInAnimation} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${hideAnimation} 100ms ease-in`,
  },

  '&[data-state="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },

  '&[data-state="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },

  '&[data-state="end"]': {
    animation: `${swipeOutAnimation} 100ms ease-in`,
  },
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  padding: '2rem',
  listStyle: 'none',
})

export const ToastTitle = styled(Toast.Title, {
  fontSize: '1.5rem',
  fontFamily: "'Crimson Text', serif",
})
