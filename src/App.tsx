import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { QuemSomos } from './pages/QuemSomos'
import { Projetos } from './pages/Projetos'
import { Cursos } from './pages/Cursos'
import { Acoes } from './pages/Acoes'
import { Transparencia } from './pages/Transparencia'
import { Contato } from './pages/Contato'
import { Apoie } from './pages/Apoie'
import { Voluntariado } from './pages/Voluntariado'
import { NaoEncontrada } from './pages/NaoEncontrada'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/acoes" element={<Acoes />} />
          <Route path="/transparencia" element={<Transparencia />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/apoie" element={<Apoie />} />
          <Route path="/voluntariado" element={<Voluntariado />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
