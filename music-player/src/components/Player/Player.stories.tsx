import { StoryObj, Meta } from '@storybook/react'
import { Player, PlayerProps } from '.'

export default {
  title: 'Player',
  component: Player,
  args: {
    artist: 'AnaVitória e Jorge e Mateus',
    musicName: 'Galeria do tempo',
  },
} as Meta<PlayerProps>

export const FullSize: StoryObj<PlayerProps> = {
  args: {
    size: 'full',
  },
}

export const SmallSize: StoryObj<PlayerProps> = {
  args: {
    size: 'smallFirst',
  },
}
