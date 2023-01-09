import { styled } from '../../styles'
import * as Progress from '@radix-ui/react-progress'

export const PlayerContainer = styled('div', {
  padding: '1.8rem',
  backgroundColor: '$purple200',
  borderRadius: '9.6px',
  variants: {
    size: {
      full: {
        gridArea: 'full',
        padding: '2.4rem',
      },
      smallFirst: {
        gridArea: 'smallFirst',
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
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '1.8rem 0 0.6rem 0',
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

    '&:hover': {
      svg: {
        color: '$purple100',
      },
    },
  },
})

export const ProgressRoot = styled(Progress.Root, {
  backgroundColor: 'red',
  height: '0.375rem',
  borderRadius: '99px',
})

export const ProgressIndicator = styled(Progress.Indicator, {
  backgroundColor: 'red',
})
