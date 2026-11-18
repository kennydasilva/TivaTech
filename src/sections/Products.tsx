import tivacv from '../assets/projects/Tivacv.png'
import Words from '../components/Words'
import { useLang } from '../LangContext'

const IMAGES = [tivacv]

// Os produtos da TIVA TECH: nome, para que serve, o que faz e ligação para
// experimentar, com uma imagem do produto ao lado.
export default function Products() {
  const { t } = useLang()
  return (
    <section id="produtos" className="sec sec--navy" aria-labelledby="produtos-title">
      <div className="wrap">
        <h2 id="produtos-title" className="sec__title words" data-reveal>
          <Words text={t.products.title} />
        </h2>
        {t.products.items.map((item, i) => (
          <article key={item.name} className="product">
            <div>
              <p className="product__kind" data-reveal>
                {item.kind}
              </p>
              <h3 className="product__name" data-reveal>
                {item.name}
              </h3>
              <p className="product__text" data-reveal>
                {item.text}
              </p>
              <ul className="product__features" data-reveal>
                {item.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <p className="product__cta" data-reveal>
                <a className="button" href={item.url} target="_blank" rel="noreferrer">
                  {item.cta}
                </a>
              </p>
            </div>
            <a className="product__shot" href={item.url} target="_blank" rel="noreferrer" tabIndex={-1} data-reveal>
              <img src={IMAGES[i]} alt={item.imageAlt} width={1503} height={910} loading="lazy" />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
