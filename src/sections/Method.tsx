import Eyebrow from '../components/Eyebrow'

const steps = [
  { when: 'SEMANA 1', title: 'Diagnóstico', text: 'Entender o negócio e o desafio.' },
  { when: '1 - 2 SEMANAS', title: 'Proposta e design', text: 'Âmbito, prazo e preço por escrito.' },
  { when: '4 - 12 SEMANAS', title: 'Desenvolvimento', text: 'Entregas a cada duas semanas.' },
  { when: '1 SEMANA', title: 'Lançamento', text: 'Publicação e formação da equipa.' },
  { when: 'CONTÍNUO', title: 'Acompanhamento', text: 'Suporte e evolução contínua.' },
]

export default function Method() {
  return (
    <section className="section method" id="metodo">
      <div className="container">
        <Eyebrow>O NOSSO MÉTODO</Eyebrow>
        <h2 className="title">Resultados visíveis em semanas, não em meses.</h2>
        <div className="method__steps">
          <div className="method__track" />
          {steps.map((s) => (
            <div className="step" key={s.title}>
              <div className="step__dot">
                <span />
              </div>
              <div className="step__when">{s.when}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
