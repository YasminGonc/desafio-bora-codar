import {
  ButtonsContainer,
  HeaderContainer,
  PlayerContainer,
  ProgressIndicator,
  ProgressRoot,
  TextContainer,
} from './styles'
import { Play, FastForward, Rewind } from 'phosphor-react'
import largeImage from '../../assets/largeImage.png'

interface PlayerProps {
  size: 'full' | 'smallFirst' | 'smallSecond'
}

export function Player({ size }: PlayerProps) {
  return (
    <PlayerContainer size={size}>
      <HeaderContainer display={size === 'full'}>
        <img src={largeImage} alt="" />
        <TextContainer>
          <h2>Acorda Devinho</h2>
          <p>Banda Rocketseat</p>
        </TextContainer>
      </HeaderContainer>

      <ButtonsContainer>
        <button>
          <Rewind weight={'fill'} />
        </button>
        <button>
          <Play weight={'fill'} />
        </button>
        <button>
          <FastForward weight={'fill'} />
        </button>
      </ButtonsContainer>

      <ProgressRoot>
        <ProgressIndicator />
      </ProgressRoot>
    </PlayerContainer>
  )
}
