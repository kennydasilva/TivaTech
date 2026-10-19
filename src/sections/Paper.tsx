import { useEffect, useRef, type CSSProperties } from 'react'
import tWhite from '../assets/t-branco.png'

// Folhas soltas (posição de partida x, y, rotação) que se juntam no sistema.
const sheets = [
  { kind: 'grid', x: -210, y: -70, r: -16, lines: 5 },
  { kind: 'note', x: 190, y: -110, r: 12, lines: 4 },
  { kind: '', x: -120, y: 120, r: 9, lines: 5 },
  { kind: 'grid', x: 220, y: 110, r: -8, lines: 3 },
  { kind: '', x: 20, y: -150, r: 4, lines: 4 },
]

// Do papel ao sistema: com o scroll, --p vai de 0 a 1 e as folhas juntam-se
// num painel de gestão.
export default function Paper() {
  const stage = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = stage.current
    if (!el) return
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const update = () => {
      const top = el.getBoundingClientRect().top
      const vh = innerHeight
      const p = reduce ? 1 : Math.min(1, Math.max(0, (vh * 0.8 - top) / (vh * 0.55)))
      el.style.setProperty('--p', p.toFixed(3))
    }
    update()
    addEventListener('scroll', update, { passive: true })
    addEventListener('resize', update)
    return () => {
      removeEventListener('scroll', update)
      removeEventListener('resize', update)
    }
  }, [])

  return (
    <section className="paper gutter" aria-label="Do papel ao sistema">
      <div className="inner paper__grid">
        <div className="paper__text">
          <h2 data-reveal>
            Do papel<span>ao sistema.</span>
          </h2>
          <p data-reveal>Folhas, cadernos e Excel passam a ser um só sistema.</p>
        </div>
        <div className="paper__stage" ref={stage} aria-hidden="true">
          {sheets.map((s, i) => (
            <div
              key={i}
              className={s.kind ? `sheet sheet--${s.kind}` : 'sheet'}
              style={{ '--x': `${s.x}px`, '--y': `${s.y}px`, '--r': `${s.r}deg` } as CSSProperties}
            >
              {Array.from({ length: s.lines }, (_, j) => (
                <i key={j} />
              ))}
            </div>
          ))}
          <div className="system" data-ui>
            <div className="system__bar">
              <img src={tWhite} alt="" width={22} height={18} />
              Painel de gestão
            </div>
            <div className="system__kpis">
              <span>
                <small>Pedidos hoje</small>48
              </span>
              <span>
                <small>Clientes</small>126
              </span>
              <span className="hl">
                <small>Facturado</small>312 400 MT
              </span>
            </div>
            <div className="system__rows">
              <i>
                Pedido #1042 <em>Aprovado</em>
              </i>
              <i>
                Pedido #1041 <em>Aprovado</em>
              </i>
              <i>
                Relatório semanal <em>Enviado</em>
              </i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
