import Eyebrow from '../components/Eyebrow'

export default function Cover() {
  return (
    <section className="section hero" id="inicio">
      <div className="hero__art" aria-hidden="true">
        <div className="hero__ring" />
        <div className="hero__bar" />
        <div className="hero__stem" />
      </div>
      <div className="container hero__content">
        <Eyebrow>IT SERVICES &amp; CONSULTING</Eyebrow>
        <h1 className="hero__title">Transformamos ideias em soluções digitais.</h1>
        <p className="hero__lead">
          Sistemas web, aplicações móveis, websites e automação de processos feitos à medida.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#contacto">
            Fale connosco
          </a>
          <a className="btn btn--ghost" href="#servicos">
            Ver serviços
          </a>
        </div>
      </div>
    </section>
  )
}
