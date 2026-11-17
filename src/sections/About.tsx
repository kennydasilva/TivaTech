import { useLang } from '../LangContext'

// Quem somos: título grande à esquerda, texto à direita.
export default function About() {
  const { t } = useLang()
  return (
    <section id="sobre" className="sec sec--navy" aria-labelledby="sobre-title">
      <div className="wrap split">
        <h2 id="sobre-title" className="sec__title" data-reveal>
          {t.about.title}
        </h2>
        <div className="prose">
          {t.about.paragraphs.map((p) => (
            <p key={p} data-reveal>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
