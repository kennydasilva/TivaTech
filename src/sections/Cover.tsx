import Eyebrow from '../components/Eyebrow'
import logo from '../assets/logo.png'

export default function Cover() {
  return (
    <section className="section hero" id="inicio">
      <div className="hero__ring" aria-hidden="true" />
      <div className="hero__bar" aria-hidden="true" />
      <div className="hero__stem" aria-hidden="true" />
      <img className="hero__logo" src={logo} alt="TIVA TECH" />
      <div className="hero__content">
        <Eyebrow>IT SERVICES &amp; CONSULTING</Eyebrow>
        <h1 className="hero__title">Transformamos ideias em soluções digitais.</h1>
        <p className="hero__lead">
          Sistemas web, aplicações móveis, websites e automação de processos feitos à medida.
        </p>
      </div>
      <div className="hero__url">tivatech.co.mz</div>
    </section>
  )
}
