import { Player } from '../Player'
import { Grid, LayoutContainer } from './style'

import galeriaDoTempo from '../../assets/geleira-do-tempo.mp3'
import deCadaVez from '../../assets/de-cada-vez.mp3'
import aCura from '../../assets/a-cura.mp3'

interface musicProps {
  id: string
  size: 'full' | 'smallFirst' | 'smallSecond'
  musicName: string
  artist: string
  music: string
}

export function Layout() {
  const musics: musicProps[] = [
    {
      id: '1',
      size: 'full',
      musicName: 'Galeria do tempo',
      artist: 'AnaVitória e Jorge e Mateus',
      music: galeriaDoTempo,
    },
    {
      id: '2',
      size: 'smallFirst',
      musicName: 'De Cada Vez',
      artist: 'Sandy e Agnes Nunes',
      music: deCadaVez,
    },
    {
      id: '3',
      size: 'smallSecond',
      musicName: 'A Cura',
      artist: 'Lulu Santos e Vitor Kley',
      music: aCura,
    },
  ]

  return (
    <LayoutContainer>
      <Grid>
        {musics.map((currentMusic) => {
          return (
            <Player
              key={currentMusic.id}
              size={currentMusic.size}
              musicName={currentMusic.musicName}
              artist={currentMusic.artist}
              music={currentMusic.music}
              currentMusic={currentMusic.id}
            />
          )
        })}
      </Grid>
    </LayoutContainer>
  )
}
