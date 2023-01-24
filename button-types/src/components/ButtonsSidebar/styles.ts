import { styled } from '../../styles'

export const ButtonsSidebarContainer = styled('div', {
  padding: '6rem 5rem',

  h2: {
    fontSize: '2rem',
  },

  p: {
    padding: '0.5rem 0 0 0',

    '&:last-child': {
      padding: 0,
    },
  },
})

export const TableContainer = styled('table', {
  marginTop: '4.25rem',
  width: '100%',
  borderCollapse: 'collapse',

  fontSize: '0.75rem',
  textAlign: 'center',
  textTransform: 'uppercase',

  thead: {
    backgroundColor: '$purple700',

    th: {
      padding: '1.6rem 0',
      fontWeight: 'normal',
    },
  },

  tbody: {
    td: {
      '&:first-child': {
        backgroundColor: '$purple700',
      },
    },
  },
})
