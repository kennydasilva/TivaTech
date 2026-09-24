import Eyebrow from '../components/Eyebrow'
import logoWhite from '../assets/logo-white.png'

export default function Contact() {
  return (
    <section className="slide contact" data-label="Contacto">
      <Eyebrow light>CONTACTO</Eyebrow>
      <div>
        <h2>
          Ideias em soluções <span className="accent">digitais.</span>
        </h2>
        <p className="contact__lead">Vamos conversar sobre o seu próximo projecto.</p>
      </div>
      <div className="contact__footer">
        <div className="contact__channels">
          <div>
            <div className="contact__label">WHATSAPP</div>
            <a className="contact__value" href="https://wa.me/258000000000">+258 00 000 0000</a>
          </div>
          <div>
            <div className="contact__label">E-MAIL</div>
            <a className="contact__value" href="mailto:info@tivatech.co.mz">info@tivatech.co.mz</a>
          </div>
        </div>
        <img className="contact__logo" src={logoWhite} alt="TIVA TECH" />
      </div>
    </section>
  )
}
