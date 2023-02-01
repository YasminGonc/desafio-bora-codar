import { StoryObj, Meta } from '@storybook/react'
import {
  ButtonWithTooltip,
  TooltipProps,
} from '../components/ButtonWithTooltip'
import { Play, FastForward, Rewind, Pause } from 'phosphor-react'

export default {
  title: 'Music Player/Tooltip',
  component: ButtonWithTooltip,
} as Meta<TooltipProps>

export const PlayMusic: StoryObj<TooltipProps> = {
  render: (args) => (
    <ButtonWithTooltip {...args}>
      <Play weight={'fill'} color="#E1E1E6" />
    </ButtonWithTooltip>
  ),
  args: {
    note: 'Play',
  },
}

export const PauseMusic: StoryObj<TooltipProps> = {
  render: (args) => (
    <ButtonWithTooltip {...args}>
      <Pause weight={'fill'} color="#E1E1E6" />
    </ButtonWithTooltip>
  ),
  args: {
    note: 'Pause',
  },
}

export const ForwardMusic: StoryObj<TooltipProps> = {
  render: (args) => (
    <ButtonWithTooltip {...args}>
      <FastForward weight={'fill'} color="#E1E1E6" />
    </ButtonWithTooltip>
  ),
  args: {
    note: 'Forward',
  },
}

export const RewindMusic: StoryObj<TooltipProps> = {
  render: (args) => (
    <ButtonWithTooltip {...args}>
      <Rewind weight={'fill'} color="#E1E1E6" />
    </ButtonWithTooltip>
  ),
  args: {
    note: 'Rewind',
  },
}
