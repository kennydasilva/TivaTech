import { useLang } from '../LangContext'

// Cinco etapas, da descoberta à manutenção. A barra de cada etapa escurece
// à medida que o projecto avança.
export default function Process() {
  const { t } = useLang()
  return (
    <section className="section" aria-labelledby="como-title">
      <div className="wrap">
        <h2 id="como-title" className="title title--section section__title--center" data-reveal>
          {t.process.title}
        </h2>
        <p className="lead section__lead section__lead--center">{t.process.lead}</p>
        <ol className="steps">
          {t.process.steps.map((step) => (
            <li key={step.name} className="step" data-reveal>
              <span className="step__bar" aria-hidden="true" />
              <span className="step__when">{step.when}</span>
              <h3>{step.name}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
