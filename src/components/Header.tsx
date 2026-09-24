import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import './Header.css'

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#porque', label: 'Porquê nós' },
  { href: '#metodo', label: 'Método' },
  { href: '#projectos', label: 'Projectos' },
  { href: '#sobre', label: 'Sobre nós' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={scrolled ? 'header header--scrolled' : 'header'}>
      <div className="header__inner">
        <a href="#inicio" className="header__brand" onClick={close}>
          <img src={logo} alt="TIVA TECH" />
        </a>

        <button
          className="header__toggle"
          type="button"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="menu" className={open ? 'header__nav is-open' : 'header__nav'}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="header__cta" onClick={close}>
            Contacto
          </a>
        </nav>
      </div>
    </header>
  )
}
