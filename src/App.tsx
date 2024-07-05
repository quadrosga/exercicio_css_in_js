import { ThemeProvider } from 'styled-components'

import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import './global.css'
import temaMain from './components/themes/main'

function App() {
  return (
    <ThemeProvider theme={temaMain}>
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </ThemeProvider>
  )
}

export default App
