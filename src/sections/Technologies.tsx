import { useState } from 'react'
import type { TechCategory } from '../content'
import { useLang } from '../LangContext'
import { TECH, type Tech } from '../tech'

type Filter = 'all' | TechCategory

function TechCard({ tech }: { tech: Tech }) {
  return (
    <div className="tech">
      <img src={tech.logo} alt="" width={48} height={48} loading="lazy" />
      <span>{tech.name}</span>
    </div>
  )
}

// Carrossel com as tecnologias por categoria. "Todas" desliza devagar e pára
// sob o cursor; uma categoria mostra só as suas, numa grelha.
export default function Technologies() {
  const { t } = useLang()
  const [filter, setFilter] = useState<Filter>('all')
  const filters: Filter[] = ['all', ...(Object.keys(t.tech.categories) as TechCategory[])]
  const label = (f: Filter) => (f === 'all' ? t.tech.all : t.tech.categories[f])

  return (
    <section id="tecnologias" className="section section--tight-bottom" aria-labelledby="tec-title">
      <div className="wrap">
        <h2 id="tec-title" className="title title--section" data-reveal>
          {t.tech.title}
        </h2>
        <p className="lead section__lead">{t.tech.lead}</p>
        <div className="chips" role="group" aria-label={t.tech.filter}>
          {filters.map((f) => (
            <button key={f} type="button" className="chip" aria-pressed={f === filter} onClick={() => setFilter(f)}>
              {label(f)}
            </button>
          ))}
        </div>

        {filter === 'all' ? (
          <div className="marquee">
            <div className="marquee__track">
              {[...TECH, ...TECH].map((tech, i) => (
                <div key={`${tech.name}-${i}`} aria-hidden={i >= TECH.length || undefined}>
                  <TechCard tech={tech} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="tech-grid">
            {TECH.filter((tech) => tech.category === filter).map((tech) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
