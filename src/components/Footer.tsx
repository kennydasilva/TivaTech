import logoWhite from '../assets/logo-white.png'
import { EMAIL, WHATSAPP_LABEL, whatsappLink } from '../contact'
import { useLang } from '../LangContext'
import NavLinks from './Nav'

// Rodapé em três colunas: marca, menu e contactos.
export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="foot">
      <div className="wrap foot__grid">
        <div className="foot__brand">
          <img src={logoWhite} alt="TIVA TECH" width={935} height={165} loading="lazy" />
          <p>{t.contact.city}</p>
        </div>
        <nav className="foot__col" aria-label={t.footer.menu}>
          <b>{t.footer.menu}</b>
          <NavLinks />
        </nav>
        <div className="foot__col">
          <b>{t.footer.contact}</b>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href={whatsappLink()} target="_blank" rel="noreferrer">
            WhatsApp {WHATSAPP_LABEL}
          </a>
        </div>
        <p className="foot__copy">© {new Date().getFullYear()} TIVA TECH</p>
      </div>
    </footer>
  )
}
