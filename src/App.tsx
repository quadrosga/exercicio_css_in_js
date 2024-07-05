import { ThemeProvider } from 'styled-components'

import EstiloGlobal, { Container } from './styles'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import './global.css'
import temaMain from './components/themes/main'

function App() {
  return (
    <ThemeProvider theme={temaMain}>
      <EstiloGlobal />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
