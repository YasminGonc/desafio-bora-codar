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
      purple100: '#D9CDF7',
      text: '#271A45',
    },
  },
  media: {
    bp1: '(max-width: 768px)',
    bp2: '(max-width: 375px)',
    bp3: '(max-width: 320px)',
  },
})
