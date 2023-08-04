import { MantineProvider } from '@mantine/core'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Portfolio from './components/Portfolio'
import Summary from './components/Summary'
function App() {
  return (
    <MantineProvider withNormalizeCSS>
      <Nav />
      <Hero />
      <Portfolio />
      <Summary />
    </MantineProvider>
  )
}

export default App
