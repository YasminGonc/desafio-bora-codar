import { styled } from '../../styles'
import * as Progress from '@radix-ui/react-progress'

export const PlayerContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  padding: '1.8rem',
  backgroundColor: '$purple200',
  borderRadius: '9.6px',

  fontFamily: "'Roboto', sans-serif",

  variants: {
    size: {
      full: {
        gridArea: 'full',
        padding: '2.4rem',
        maxWidth: '297px',
      },
      smallFirst: {
        gridArea: 'smallFirst',
        maxWidth: '445px',
        maxHeight: '284px',
      },
      smallSecond: {
        gridArea: 'smallSecond',
      },
    },
  },
})

export const HeaderContainer = styled('div', {
  display: 'flex',
  gap: '1.8rem',
  img: {
    width: '30%',
  },
  variants: {
    display: {
      true: {
        flexDirection: 'column',
        gap: 0,
        img: {
          width: '100%',
        },
      },
    },
  },
})

export const TextContainer = styled('div', {
  h2: {
    color: '$white',
    fontSize: '1.5rem',
    fontWeight: 'bold',

    margin: '1.8rem 0 0.6rem 0',
  },

  p: {
    color: '$gray',
  },
})

export const ButtonsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '1.8rem 0',

  button: {
    all: 'unset',
    display: 'flex',
    cursor: 'pointer',

    svg: {
      color: '$white',
      width: '1.25rem',
      height: '1.25rem',
    },

    '&:hover:not(:disabled)': {
      svg: {
        color: '$purple100',
      },
    },

    '&:disabled': {
      cursor: 'default',
      svg: {
        opacity: 0.3,
      },
    },
  },
})

export const ProgressRoot = styled(Progress.Root, {
  backgroundColor: '$purple100',
  opacity: 0.6,
  height: '0.375rem',
  overflow: 'hidden',
  borderRadius: '99px',
  transform: 'translateZ(0)',
})

export const ProgressIndicator = styled(Progress.Indicator, {
  backgroundColor: '$progress',
  height: '100%',
  transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)',
})

export const TimeContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '0.6rem 0 0 0',
  color: '$gray',
  fontSize: '0.875rem',
})
