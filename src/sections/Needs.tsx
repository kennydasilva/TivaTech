import { useLang } from '../LangContext'
import Words from '../components/Words'

// Situações em que o cliente se pode reconhecer, com um convite no fim.
export default function Needs() {
  const { t } = useLang()
  return (
    <section className="sec sec--blue" aria-labelledby="problemas-title">
      <div className="wrap split">
        <h2 id="problemas-title" className="sec__title words" data-reveal>
          <Words text={t.needs.title} />
        </h2>
        <div>
          <ul className="needs" data-reveal>
            {t.needs.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="ask">
            <p className="ask__q words" data-reveal>
              <Words text={t.needs.question} />
            </p>
            <a className="button" href="#contacto" data-reveal>
              {t.needs.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
