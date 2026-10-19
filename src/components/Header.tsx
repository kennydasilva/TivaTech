import logoWhite from '../assets/logo-white.png'
import './Header.css'

// Cabeçalho azul com o logótipo oficial (branco sobre azul).
export default function Header() {
  return (
    <header className="top gutter">
      <div className="inner top__row">
        <a className="brand" href="#inicio">
          <img src={logoWhite} alt="TIVA TECH" width={935} height={165} />
        </a>
        <nav className="nav" aria-label="Principal">
          <a href="#servicos">Serviços</a>
          <a href="#metodo">Como trabalhamos</a>
          <a className="btn nav__cta" href="#contacto">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  )
}
