import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { content } from './content'
import { langFromPath, pathFor, type Lang } from './i18n'
import { LangContext } from './LangContext'
import { About, Cta, Faq, Hero, Process, Services, Technologies, WhatWeDo, Why, Work } from './sections'
import useReveal from './useReveal'
import './sections/sections.css'

export default function App() {
  const [lang, setLang] = useState<Lang>(() => langFromPath(window.location.pathname))
  const t = content[lang]
  useReveal(lang)

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
      <a className="skip-link" href="#conteudo">
        {t.skip}
      </a>
      <Header onLangChange={changeLang} />
      <main id="conteudo">
        <Hero />
        <WhatWeDo />
        <Services />
        <Technologies />
        <Work />
        <Why />
        <Process />
        <About />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </LangContext.Provider>
  )
}
