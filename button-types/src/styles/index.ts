import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      purple100: '#9674E5',
      purple200: '#8257E5',
      purple700: '#1C162C',
      purple800: '#130F1E',
      purple900: '#0B0911',

      gray100: '#6A617F',
      gray200: '#3C3748',

      white: '#FFFFFF',
    },
  },
})
