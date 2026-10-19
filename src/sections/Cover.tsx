import { useRef } from 'react'
import Arrow from '../components/Arrow'
import DotWave from '../components/DotWave'
import { whatsappLink } from '../contact'

export default function Cover() {
  const text = useRef<HTMLDivElement>(null)

  return (
    <section className="hero" id="inicio">
      <DotWave above={text} />
      <div className="hero__text gutter" ref={text}>
        <h1 className="hero__title">
          Tecnologia <span>à medida.</span>
        </h1>
        <p className="hero__lead">Sistemas web, aplicações e automação para empresas em Moçambique.</p>
        <div className="hero__actions">
          <a className="btn" href={whatsappLink()} target="_blank" rel="noreferrer">
            Falar no WhatsApp <Arrow />
          </a>
          <a className="link" href="#servicos">
            Ver serviços
          </a>
        </div>
      </div>
    </section>
  )
}
