import { Player } from '../Player'
import { Grid, LayoutContainer } from './style'

export function Layout() {
  return (
    <LayoutContainer>
      <Grid>
        <Player size="full" />
        <Player size="smallFirst" />
        <Player size="smallSecond" />
      </Grid>
    </LayoutContainer>
  )
}
