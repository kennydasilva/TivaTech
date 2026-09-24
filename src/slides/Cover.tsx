import Eyebrow from '../components/Eyebrow'
import logo from '../assets/logo.png'

export default function Cover() {
  return (
    <section className="slide cover" data-label="Capa">
      <div className="cover__ring" />
      <div className="cover__bar" />
      <div className="cover__stem" />
      <img className="cover__logo" src={logo} alt="TIVA TECH" />
      <div className="cover__content">
        <Eyebrow>IT SERVICES &amp; CONSULTING</Eyebrow>
        <h1 className="cover__title">Transformamos ideias em soluções digitais.</h1>
        <p className="cover__lead">
          Sistemas web, aplicações móveis, websites e automação de processos feitos à medida.
        </p>
      </div>
      <div className="cover__url">tivatech.co.mz</div>
    </section>
  )
}
