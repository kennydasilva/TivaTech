import { useState } from 'react'
import logoWhite from '../assets/logo-white.png'
import type { Lang } from '../i18n'
import { useLang } from '../LangContext'
import './Header.css'

const LANGS: Lang[] = ['pt', 'en']

// Barra azul flutuante com o logótipo oficial (branco sobre azul). Acompanha
// a página; em ecrãs pequenos os links passam para um menu.
export default function Header({ onLangChange }: { onLangChange: (lang: Lang) => void }) {
  const { lang, t } = useLang()
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  const links = (
    <>
      <a href="#servicos" onClick={close}>{t.nav.services}</a>
      <a href="#projectos" onClick={close}>{t.nav.work}</a>
      <a href="#empresa" onClick={close}>{t.nav.about}</a>
      <a href="#contactos" onClick={close}>{t.nav.contact}</a>
    </>
  )

  return (
    <header className="bar">
      <div className="bar__inner">
        <a className="bar__brand" href="#inicio" aria-label="TIVA TECH">
          <img src={logoWhite} alt="TIVA TECH" width={935} height={165} />
        </a>
        <nav className="bar__nav" aria-label={t.nav.label}>
          {links}
        </nav>
        <div className="bar__end">
          <div className="bar__lang" role="group" aria-label={t.nav.language}>
            {LANGS.map((code, i) => (
              <span key={code}>
                {i > 0 && <span aria-hidden="true">/</span>}
                <a
                  href={`/${code}/`}
                  lang={code}
                  aria-current={code === lang ? 'true' : undefined}
                  onClick={(e) => {
                    e.preventDefault()
                    onLangChange(code)
                  }}
                >
                  {code.toUpperCase()}
                </a>
              </span>
            ))}
          </div>
          <a className="btn btn--light bar__cta" href="#proposta">
            {t.nav.cta}
          </a>
          <button
            type="button"
            className="bar__toggle"
            aria-expanded={open}
            aria-controls="menu-movel"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="visually-hidden">{t.nav.menu}</span>
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path d={open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav id="menu-movel" className="bar__menu" aria-label={t.nav.label}>
          {links}
          <a className="btn btn--light" href="#proposta" onClick={close}>
            {t.nav.cta}
          </a>
        </nav>
      )}
    </header>
  )
}
