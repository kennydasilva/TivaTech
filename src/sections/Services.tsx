import { useLang } from '../LangContext'

// Os serviços em letra grande, um por linha, com a frase ao lado.
export default function Services() {
  const { t } = useLang()
  return (
    <section id="servicos" className="sec sec--white" aria-labelledby="servicos-title">
      <div className="wrap">
        <h2 id="servicos-title" className="sec__title" data-reveal>
          {t.services.title}
        </h2>
        <ul className="services">
          {t.services.items.map((item) => (
            <li key={item.title} className="service" data-reveal>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
