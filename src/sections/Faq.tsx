import { useLang } from '../LangContext'

// Perguntas com <details>: abrem e fecham sem JavaScript e com o teclado.
export default function Faq() {
  const { t } = useLang()
  return (
    <section id="perguntas" className="sec sec--white" aria-labelledby="faq-title">
      <div className="wrap split">
        <h2 id="faq-title" className="sec__title" data-reveal>
          {t.faq.title}
        </h2>
        <div className="faq">
          {t.faq.items.map((item) => (
            <details key={item.q} className="faq__item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
