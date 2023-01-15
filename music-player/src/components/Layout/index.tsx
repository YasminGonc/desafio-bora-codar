import { Player } from '../Player'
import { Grid, LayoutContainer } from './style'

import galeriaDoTempo from '../../assets/geleira-do-tempo.mp3'
import deCadaVez from '../../assets/de-cada-vez.mp3'
import aCura from '../../assets/a-cura.mp3'
import { useContext } from 'react'
import { MusicContext } from '../../context/musicContext'

export function Layout() {
  const { currentMusicId } = useContext(MusicContext)

  return (
    <LayoutContainer>
      <Grid>
        <Player
          size="full"
          musicName="Galeria do tempo"
          artist="AnaVitória e Jorge e Mateus"
          music={galeriaDoTempo}
          musicId="1"
          disable={currentMusicId !== '1'}
        />

        <Player
          size="smallFirst"
          musicName="De Cada Vez"
          artist="Sandy e Agnes Nunes"
          music={deCadaVez}
          musicId="2"
          disable={currentMusicId !== '2'}
        />

        <Player
          size="smallSecond"
          musicName="A Cura"
          artist="Lulu Santos e Vitor Kley"
          music={aCura}
          musicId="3"
          disable={currentMusicId !== '3'}
        />
      </Grid>
    </LayoutContainer>
  )
}
