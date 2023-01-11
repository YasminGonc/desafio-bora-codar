import { Player } from '../Player'
import { Grid, LayoutContainer } from './style'

export function Layout() {
  return (
    <LayoutContainer>
      <Grid>
        <Player
          size="full"
          music="Galeria do tempo"
          artist="AnaVitória e Jorge e Mateus"
        />
        {/* <Player
          size="smallFirst"
          music="Galeria do tempo"
          artist="AnaVitória e Jorge e Mateus"
        />
        <Player
          size="smallSecond"
          music="Galeria do tempo"
          artist="AnaVitória e Jorge e Mateus"
        /> */}
      </Grid>
    </LayoutContainer>
  )
}
