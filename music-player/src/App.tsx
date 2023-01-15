import { Layout } from './components/Layout'
import { MusicProvider } from './context/musicContext'
import { globalStyles } from './styles/global'

globalStyles()

export function App() {
  return (
    <MusicProvider>
      <Layout />
    </MusicProvider>
  )
}
