import { useLang } from '../LangContext'

// Perguntas que tiram dúvidas antes do contacto. Usa <details>, por isso
// abre e fecha sem JavaScript e com o teclado.
export default function Faq() {
  const { t } = useLang()
  return (
    <section id="perguntas" className="section section--wash" aria-labelledby="faq-title">
      <div className="wrap split split--faq">
        <div>
          <h2 id="faq-title" className="title title--section" data-reveal>
            {t.faq.title}
          </h2>
          <p className="lead section__lead">{t.faq.lead}</p>
        </div>
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
