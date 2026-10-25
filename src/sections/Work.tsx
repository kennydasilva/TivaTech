import app from '../assets/photos/project-app.jpg'
import dashboard from '../assets/photos/project-dashboard.jpg'
import website from '../assets/photos/project-website.jpg'
import { useLang } from '../LangContext'

const IMAGES = [dashboard, website, app]

// Projectos seleccionados. As imagens e os textos são genéricos até haver
// capturas e resultados dos projectos reais.
export default function Work() {
  const { t } = useLang()
  return (
    <section id="projectos" className="section" aria-labelledby="proj-title">
      <div className="wrap">
        <div className="section__head">
          <div>
            <h2 id="proj-title" className="title title--section" data-reveal>
              {t.work.title}
            </h2>
            <p className="lead section__lead">{t.work.lead}</p>
          </div>
          <a className="btn btn--ghost" href="#projectos">
            {t.work.all}
          </a>
        </div>
        <div className="cards">
          {t.work.items.map((item, i) => (
            <a key={i} className="project" href="#projectos" data-reveal>
              <img src={IMAGES[i]} alt="" width={1400} height={933} loading="lazy" />
              <span className="project__kind">{item.kind}</span>
              <h3 className="project__name">{item.name}</h3>
              <p>{item.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
