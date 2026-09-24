import Eyebrow from '../components/Eyebrow'
import logoWhite from '../assets/logo-white.png'

export default function Contact() {
  return (
    <footer className="section contact" id="contacto">
      <div className="container">
        <Eyebrow light>CONTACTO</Eyebrow>
        <div className="contact__body">
          <h2 className="contact__title">
            Ideias em soluções <span className="accent">digitais.</span>
          </h2>
          <p className="contact__lead">Vamos conversar sobre o seu próximo projecto.</p>
        </div>
        <div className="contact__footer">
          <div className="contact__channels">
            <div>
              <div className="contact__label">WHATSAPP</div>
              <a className="contact__value" href="https://wa.me/258000000000" target="_blank" rel="noreferrer">
                +258 00 000 0000
              </a>
            </div>
            <div>
              <div className="contact__label">E-MAIL</div>
              <a className="contact__value" href="mailto:info@tivatech.co.mz">
                info@tivatech.co.mz
              </a>
            </div>
          </div>
          <img className="contact__logo" src={logoWhite} alt="TIVA TECH" />
        </div>
        <div className="contact__legal">
          <span>© {new Date().getFullYear()} TIVA TECH. Todos os direitos reservados.</span>
          <span>tivatech.co.mz</span>
        </div>
      </div>
    </footer>
  )
}
