import { ButtonsSidebar } from '../ButtonsSidebar'
import { TestingBar } from '../TestingBar'
import { LayoutContainer } from './styles'

export function Layout() {
  return (
    <LayoutContainer>
      <ButtonsSidebar />
      <TestingBar />
    </LayoutContainer>
  )
}
