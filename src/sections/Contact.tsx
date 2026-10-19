import Arrow from '../components/Arrow'
import { EMAIL, SOCIAL, WHATSAPP_LABEL, whatsappLink } from '../contact'
import logoWhite from '../assets/logo-white.png'

const social = [
  {
    name: 'WhatsApp',
    href: SOCIAL.whatsapp || whatsappLink(),
    icon: (
      <>
        <path d="M12 2.5a9.5 9.5 0 0 0-8.2 14.3L2.5 21.5l4.8-1.3A9.5 9.5 0 1 0 12 2.5z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M8.6 7.4c.3-.3.8-.3 1 .1l.9 1.9c.1.3 0 .6-.2.8l-.6.6c.6 1.3 1.6 2.3 2.9 2.9l.6-.6c.2-.2.5-.3.8-.2l1.9.9c.4.2.4.7.1 1l-.7.8c-.5.5-1.2.6-1.9.4-2.6-.9-4.6-2.9-5.5-5.5-.2-.7-.1-1.4.4-1.9z" fill="currentColor" />
      </>
    ),
  },
  {
    name: 'Instagram',
    href: SOCIAL.instagram,
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" />
      </>
    ),
  },
  {
    name: 'Facebook',
    href: SOCIAL.facebook,
    icon: <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H7.9v3h2.6V21z" fill="currentColor" />,
  },
  {
    name: 'Telegram',
    href: SOCIAL.telegram,
    icon: <path d="M21 4.2 2.9 11.1c-.7.3-.7 1.2 0 1.4l4.4 1.4 1.7 5.3c.2.6 1 .8 1.4.3l2.5-2.4 4.5 3.3c.5.4 1.3.1 1.4-.5L21.9 5c.2-.6-.4-1.1-.9-.8zM9.6 14.3l-.4 3.2-1.2-3.8 9.5-6-7.9 6.6z" fill="currentColor" />,
  },
]

export default function Contact() {
  return (
    <footer className="footer gutter" id="contacto">
      <div className="inner">
        <div className="footer__grid">
          <div className="footer__brand">
            <img src={logoWhite} alt="TIVA TECH" width={935} height={165} loading="lazy" />
            <p>Sistemas web, aplicações e automação para empresas em Moçambique.</p>
            <div className="footer__social" aria-label="Redes sociais">
              {social.map((s) => (
                <a
                  key={s.name}
                  href={s.href || '#contacto'}
                  aria-label={s.name}
                  {...(s.href ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3>Serviços</h3>
            <ul>
              <li><a href="#servicos">Sistemas web</a></li>
              <li><a href="#servicos">Aplicações</a></li>
              <li><a href="#servicos">Websites</a></li>
              <li><a href="#servicos">Automação</a></li>
              <li><a href="#servicos">Domínio e alojamento</a></li>
              <li><a href="#servicos">Consultoria em TI</a></li>
            </ul>
          </div>
          <div>
            <h3>Empresa</h3>
            <ul>
              <li><a href="#metodo">Como trabalhamos</a></li>
              <li><a href="#porque">Porquê nós</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3>Contacto</h3>
            <ul className="footer__contact">
              <li>
                <small>WhatsApp</small>
                {WHATSAPP_LABEL}
              </li>
              <li>
                <small>E-mail</small>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li>
                <small>Onde</small>
                Moçambique
              </li>
            </ul>
            <a className="btn footer__cta" href={whatsappLink()} target="_blank" rel="noreferrer">
              Falar no WhatsApp <Arrow />
            </a>
          </div>
        </div>
        <div className="footer__bar">
          <span>© {new Date().getFullYear()} TIVA TECH. Todos os direitos reservados.</span>
          <span>Moçambique</span>
        </div>
      </div>
    </footer>
  )
}
