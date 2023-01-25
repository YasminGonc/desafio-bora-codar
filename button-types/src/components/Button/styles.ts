import { styled } from '../../styles'

export const ButtonComponent = styled('button', {
  padding: '0.75rem 1.5rem',
  border: 'none',
  borderRadius: '99px',

  color: '$white',
  textTransform: 'uppercase',

  variants: {
    type: {
      primary: {
        backgroundColor: '$purple200',
      },
      secondary: {
        backgroundColor: '$gray200',
      },
      tertiary: {
        backgroundColor: 'transparent',
      },
      hoverPrimary: {
        backgroundColor: '$purple100',
      },
      hoverSecondary: {
        backgroundColor: '$gray100',
      },
    },
    focus: {
      true: {
        border: '2px solid $white',
      },
    },
    disabled: {
      true: {
        opacity: 0.56,
        cursor: 'not-allowed',
      },
    },
  },
})
