import Eyebrow from '../components/Eyebrow'

const reasons = [
  { title: 'O sistema é seu.', text: 'Código, domínio e contas em nome da sua empresa.' },
  { title: 'Preço fechado.', text: 'Proposta clara, sem custos escondidos.' },
  { title: 'Linguagem simples.', text: 'Cada decisão técnica explicada sem jargão.' },
  { title: 'Parceria contínua.', text: 'Suporte e melhorias após o lançamento.' },
]

export default function Why() {
  return (
    <section className="section why" id="porque">
      <div className="container">
        <Eyebrow light>PORQUÊ A TIVA TECH</Eyebrow>
        <h2 className="title">
          Tecnologia que trabalha para si, <span className="accent">não o contrário.</span>
        </h2>
        <div className="why__grid">
          {reasons.map((r) => (
            <div className="reason" key={r.title}>
              <div className="reason__line" />
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
