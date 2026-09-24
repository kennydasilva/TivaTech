import Eyebrow from '../components/Eyebrow'

export default function Overview() {
  return (
    <section className="slide overview" data-label="Visão geral">
      <div className="overview__art" aria-hidden="true">
        <div className="a" />
        <div className="b" />
        <div className="c" />
      </div>
      <div>
        <Eyebrow>VISÃO GERAL</Eyebrow>
        <h2>Tecnologia feita para simplificar a forma como as empresas trabalham.</h2>
        <p>
          A TIVA TECH desenvolve soluções digitais à medida para substituir processos manuais,
          melhorar a eficiência e apoiar o crescimento dos negócios.
        </p>
      </div>
    </section>
  )
}
