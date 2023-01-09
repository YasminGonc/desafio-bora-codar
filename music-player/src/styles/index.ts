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
      purple100: '#AA92C3',
      purple200: '#2A2141',
      purple300: '#0F0D13',
      white: '#E1E1E6',
    },
  },
})
