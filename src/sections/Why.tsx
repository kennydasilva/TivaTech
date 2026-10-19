const promises = [
  { title: 'O sistema é seu', text: 'Código, domínio e contas em nome da sua empresa.' },
  { title: 'Preço fechado', text: 'Proposta por escrito, sem custos escondidos.' },
  { title: 'Sem jargão', text: 'Cada decisão explicada em português claro.' },
  { title: 'Ficamos depois', text: 'Suporte e melhorias após o lançamento.' },
]

export default function Why() {
  return (
    <section className="promises gutter" id="porque" aria-label="Porquê a TIVA TECH">
      <div className="inner promises__grid">
        {promises.map((p) => (
          <div key={p.title} className="promise" data-reveal>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
