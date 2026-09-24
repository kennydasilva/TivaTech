import DeckStage from './components/DeckStage'
import { About, Contact, Cover, Method, Overview, Projects, Services, Why } from './slides'

export default function App() {
  return (
    <DeckStage width={1920} height={1080}>
      <Cover />
      <Overview />
      <Services />
      <Why />
      <Method />
      <Projects />
      <About />
      <Contact />
    </DeckStage>
  )
}
