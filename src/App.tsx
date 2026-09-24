import Header from './components/Header'
import { About, Contact, Cover, Method, Overview, Projects, Services, Why } from './sections'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Cover />
        <Overview />
        <Services />
        <Why />
        <Method />
        <Projects />
        <About />
      </main>
      <Contact />
    </>
  )
}
