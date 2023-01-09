import { styled } from '../../styles'

export const LayoutContainer = styled('main', {
  width: '100vw',
  height: '100vh',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1.5fr',
  gridTemplateAreas: `
    'full smallFirst'
    'full smallSecond'
  `,
  gap: '2rem',
})
