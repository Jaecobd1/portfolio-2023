import { MantineProvider } from '@mantine/core'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Work from './components/Work'
import Education from './components/Education'
function App() {
  return (
    <MantineProvider>
      <Nav />
      <Hero />
      <Work />
      <Education />
    </MantineProvider>
  )
}

export default App
