import ai from '../assets/photos/service-ai.jpg'
import apis from '../assets/photos/service-apis.jpg'
import consulting from '../assets/photos/service-consulting.jpg'
import mobile from '../assets/photos/service-mobile.jpg'
import software from '../assets/photos/service-software.jpg'
import web from '../assets/photos/service-web.jpg'
import { useLang } from '../LangContext'

const IMAGES = [software, web, mobile, apis, ai, consulting]

// Os seis serviços: cada cartão diz o benefício e leva à página do serviço.
export default function Services() {
  const { t } = useLang()
  return (
    <section id="servicos" className="section section--blue" aria-labelledby="servicos-title">
      <div className="wrap">
        <div className="section__head">
          <h2 id="servicos-title" className="title title--section" data-reveal>
            {t.services.title}
          </h2>
          <a className="btn btn--light" href="#servicos">
            {t.services.all}
          </a>
        </div>
        <div className="cards">
          {t.services.items.map((item, i) => (
            <a key={item.title} className="service" href="#servicos" data-reveal>
              <h3 className="service__title">{item.title}</h3>
              <p className="service__text">{item.text}</p>
              <span className="service__more">{t.services.more} →</span>
              <img className="service__image" src={IMAGES[i]} alt="" width={1400} height={933} loading="lazy" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
