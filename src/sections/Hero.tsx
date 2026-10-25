import heroImage from '../assets/photos/hero-workstation.jpg'
import { useLang } from '../LangContext'

// Primeira impressão: o que a TivaTech resolve, uma acção principal e uma
// alternativa, e uma fotografia de trabalho real sem rostos.
export default function Hero() {
  const { t } = useLang()
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero__glow" aria-hidden="true" />
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <h1 id="hero-title" className="title hero__title">
            {t.hero.title}
          </h1>
          <p className="hero__lead">{t.hero.lead}</p>
          <div className="hero__actions">
            <a className="btn" href="#proposta">
              {t.hero.primary}
            </a>
            <a className="btn btn--ghost" href="#projectos">
              {t.hero.secondary}
            </a>
          </div>
        </div>
        <img className="hero__image" src={heroImage} alt={t.hero.imageAlt} width={1400} height={933} />
      </div>
    </section>
  )
}
