import { useCallback, useEffect, useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Intro from './components/Intro'
import { content } from './content'
import { langFromPath, pathFor, type Lang } from './i18n'
import { LangContext } from './LangContext'
import { About, Contact, Faq, Hero, Needs, Products, Sectors, Services } from './sections'
import useReveal from './useReveal'
import './site.css'

const INTRO_SEEN = 'tiva-intro-visto'

// A abertura passa uma vez por sessão do browser, e nunca com "reduzir movimento".
function shouldPlayIntro() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  try {
    return !sessionStorage.getItem(INTRO_SEEN)
  } catch {
    return true
  }
}

export default function App() {
  const [lang, setLang] = useState<Lang>(() => langFromPath(window.location.pathname))
  const [intro, setIntro] = useState(shouldPlayIntro)
  const t = content[lang]
  // As entradas só começam quando a abertura sai do ecrã.
  useReveal(intro ? null : lang)

  const endIntro = useCallback(() => setIntro(false), [])

  useEffect(() => {
    try {
      sessionStorage.setItem(INTRO_SEEN, '1')
    } catch {
      // Sem sessionStorage a abertura volta a passar; não faz mal.
    }
  }, [])

  // Idioma, título e descrição da página acompanham o idioma escolhido.
  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
  }, [lang, t])

  // Botões "voltar" e "avançar" do browser entre /pt/ e /en/.
  useEffect(() => {
    const onPop = () => setLang(langFromPath(window.location.pathname))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  // Troca de idioma sem perder a secção em que o visitante está.
  const changeLang = (next: Lang) => {
    if (next === lang) return
    window.history.pushState(null, '', pathFor(next, window.location.hash))
    setLang(next)
  }

  return (
    <LangContext.Provider value={{ lang, t }}>
      {intro && <Intro onDone={endIntro} />}
      <div className="page" inert={intro}>
        <a className="skip-link" href="#conteudo">
          {t.skip}
        </a>
        <Header onLangChange={changeLang} />
        <main id="conteudo">
          <Hero />
          <About />
          <Services />
          <Needs />
          <Products />
          <Sectors />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
    </LangContext.Provider>
  )
}
