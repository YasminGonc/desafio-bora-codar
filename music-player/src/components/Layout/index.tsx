import { Player } from '../Player'
import { Grid, LayoutContainer } from './style'

import galeriaDoTempo from '../../assets/geleira-do-tempo.mp3'
import deCadaVez from '../../assets/de-cada-vez.mp3'
import aCura from '../../assets/a-cura.mp3'

export function Layout() {
  return (
    <LayoutContainer>
      <Grid>
        <Player
          size="full"
          musicName="Galeria do tempo"
          artist="AnaVitória e Jorge e Mateus"
          music={galeriaDoTempo}
        />
        <Player
          size="smallFirst"
          musicName="De Cada Vez"
          artist="Sandy e Agnes Nunes"
          music={deCadaVez}
        />
        <Player
          size="smallSecond"
          musicName="A Cura"
          artist="Lulu Santos e Vitor Kley"
          music={aCura}
        />
      </Grid>
    </LayoutContainer>
  )
}
