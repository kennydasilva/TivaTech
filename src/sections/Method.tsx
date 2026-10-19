import { useEffect, useRef } from 'react'

// Etapas no calendário de 16 semanas (coluna inicial e largura na grelha).
const stages = [
  { when: 'Semana 1', title: 'Diagnóstico', text: 'Entender o negócio.', col: '1 / span 3' },
  { when: '1 a 2 semanas', title: 'Proposta', text: 'Âmbito, prazo e preço.', col: '2 / span 4' },
  { when: '4 a 12 semanas', title: 'Desenvolvimento', text: 'Entregas de 2 em 2 semanas.', col: '4 / span 5' },
  { when: '1 semana', title: 'Lançamento', text: 'Publicação e formação.', col: '12 / span 4' },
  { when: 'Contínuo', title: 'Suporte', text: 'Evolução do sistema.', col: '14 / span 3' },
]

export default function Method() {
  const timeline = useRef<HTMLDivElement>(null)

  // A linha do tempo desenha-se com o scroll.
  useEffect(() => {
    const el = timeline.current
    if (!el) return
    const update = () => {
      const vh = innerHeight
      const p = Math.min(1, Math.max(0, (vh * 0.85 - el.getBoundingClientRect().top) / (vh * 0.6)))
      el.style.setProperty('--p', p.toFixed(3))
    }
    update()
    addEventListener('scroll', update, { passive: true })
    return () => removeEventListener('scroll', update)
  }, [])

  return (
    <section className="method gutter" id="metodo">
      <div className="inner">
        <h2 data-reveal>Resultados em semanas</h2>
        <div className="timeline" ref={timeline}>
          <div className="timeline__rail">
            <i />
          </div>
          {stages.map((s) => (
            <div key={s.title} className="stage" style={{ gridColumn: s.col }} data-reveal>
              <em>{s.when}</em>
              <b>{s.title}</b>
              <span>{s.text}</span>
            </div>
          ))}
          <div className="timeline__scale" aria-hidden="true">
            <span>Semana 0</span>
            <span>4</span>
            <span>8</span>
            <span>12</span>
            <span>16</span>
          </div>
        </div>
      </div>
    </section>
  )
}
