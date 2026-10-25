import team from '../assets/photos/team-office.jpg'
import { useLang } from '../LangContext'

// Princípios de trabalho concretos, sem adjectivos vazios.
export default function Why() {
  const { t } = useLang()
  return (
    <section className="section section--wash" aria-labelledby="porque-title">
      <div className="wrap">
        <h2 id="porque-title" className="title title--section" data-reveal>
          {t.why.title}
        </h2>
        <div className="split split--why">
          <img className="why__image" src={team} alt={t.why.imageAlt} width={1400} height={933} loading="lazy" />
          <div className="why__grid">
            {t.why.items.map((item) => (
              <div key={item.title} className="why__item" data-reveal>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
