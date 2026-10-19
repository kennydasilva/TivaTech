import Header from './components/Header'
import { Contact, Cover, Method, Paper, Services, Why } from './sections'
import useReveal from './useReveal'
import './sections/sections.css'

export default function App() {
  useReveal()

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Saltar para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Cover />
        <Paper />
        <Services />
        <Method />
        <Why />
      </main>
      <Contact />
    </>
  )
}
