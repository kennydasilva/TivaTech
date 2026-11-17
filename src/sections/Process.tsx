import { useLang } from '../LangContext'

// As etapas numa lista vertical (como as "Distinções" do Void): a duração
// grande à esquerda, o nome e a explicação à direita.
export default function Process() {
  const { t } = useLang()
  return (
    <section className="sec sec--navy" aria-labelledby="como-title">
      <div className="wrap">
        <h2 id="como-title" className="sec__title" data-reveal>
          {t.process.title}
        </h2>
        <ol className="timeline">
          {t.process.steps.map((step) => (
            <li key={step.name} data-reveal>
              <span className="timeline__when">{step.when}</span>
              <h3>{step.name}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
