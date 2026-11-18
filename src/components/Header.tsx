import logoWhite from '../assets/logo-white.png'
import type { Lang } from '../i18n'
import { useLang } from '../LangContext'
import NavLinks from './Nav'

const LANGS: Lang[] = ['pt', 'en']

// Topo: logótipo à esquerda; menu e idioma à direita. Em ecrãs pequenos o
// menu esconde-se e fica só o contacto.
export default function Header({ onLangChange }: { onLangChange: (lang: Lang) => void }) {
  const { lang, t } = useLang()
  return (
    <header className="top wrap">
      <a className="top__brand" href="#inicio" aria-label="TIVA TECH">
        <img src={logoWhite} alt="TIVA TECH" width={935} height={165} />
      </a>
      <div className="top__end">
        <nav className="top__nav" aria-label={t.nav.label}>
          <NavLinks about={false} />
        </nav>
        <a className="top__contact" href="#contacto">
          {t.nav.contact}
        </a>
        <div className="top__lang" role="group" aria-label={t.nav.language}>
          {LANGS.map((code) => (
            <a
              key={code}
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
          ))}
        </div>
      </div>
    </header>
  )
}
