import team from '../assets/photos/about-team.jpg'
import { useLang } from '../LangContext'

// Quem está por trás das soluções. A página "Sobre" completa terá o resto.
export default function About() {
  const { t } = useLang()
  return (
    <section id="empresa" className="section section--flush-top" aria-labelledby="sobre-title">
      <div className="wrap split split--about">
        <div className="about__copy">
          <h2 id="sobre-title" className="title title--section" data-reveal>
            {t.about.title}
          </h2>
          <p className="about__text">{t.about.text}</p>
          <dl className="about__facts">
            {t.about.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
          <a className="btn btn--ghost" href="#empresa">
            {t.about.action}
          </a>
        </div>
        <img className="about__image" src={team} alt={t.about.imageAlt} width={1400} height={933} loading="lazy" />
      </div>
    </section>
  )
}
