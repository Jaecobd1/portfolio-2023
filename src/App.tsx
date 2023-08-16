import { MantineProvider } from '@mantine/core'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Portfolio from './components/Portfolio'
import Summary from './components/Summary'
import About from './components/About'
import { Toaster } from 'react-hot-toast'
function App() {
  return (
    <MantineProvider withNormalizeCSS>
      <Nav />
      <Hero />
      <Portfolio />
      <Summary />
      <About />
      <Toaster />
    </MantineProvider>
  )
}

export default App
