import { styled } from '../../styles'

export const PageContainer = styled('main', {
  width: '100vw',
  height: '100vh',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@bp2': {
    padding: '0 2rem',
  },
})

export const ProductCardContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'center',
  gap: '3rem',

  padding: '0 4rem',

  '@bp1': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const ImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',

  img: {
    width: '90%',
  },

  button: {
    all: 'unset',
    cursor: 'pointer',
  },

  '@bp2': {
    img: {
      width: '90%',
    },
  },
})

export const TextContainer = styled('div', {
  h1: {
    fontSize: '2rem',
    fontFamily: "'Crimson Text', serif",
    fontWeight: 600,
    margin: '0.75rem 0',
  },

  button: {
    marginTop: '1.25rem',
    padding: '0.5rem 1rem',

    backgroundColor: 'transparent',
    borderRadius: '99px',
    border: '1px solid $text',

    textTransform: 'uppercase',
    fontSize: '0.75rem',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '$text',
      color: '$purple100',
    },
  },
})

export const ProductCode = styled('p', {
  textTransform: 'uppercase',
  fontSize: '0.625rem',
})
