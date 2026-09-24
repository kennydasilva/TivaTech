import Eyebrow from '../components/Eyebrow'

export default function Overview() {
  return (
    <section className="section overview" id="visao-geral">
      <div className="container overview__grid">
        <div className="overview__art" aria-hidden="true">
          <div className="a" />
          <div className="b" />
          <div className="c" />
        </div>
        <div>
          <Eyebrow>VISÃO GERAL</Eyebrow>
          <h2 className="title">
            Tecnologia feita para simplificar a forma como as empresas trabalham.
          </h2>
          <p className="text">
            A TIVA TECH desenvolve soluções digitais à medida para substituir processos manuais,
            melhorar a eficiência e apoiar o crescimento dos negócios.
          </p>
        </div>
      </div>
    </section>
  )
}
