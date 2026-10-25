import { whatsappLink } from '../contact'
import { useLang } from '../LangContext'

const CHECK = 'M4 10.5l4 4 8-9'

// Animação do CTA: o caminho de um projecto em miniatura (pedido, proposta,
// código, sistema publicado), num ciclo de 12 s feito só com CSS. Com
// "reduzir movimento" mostra apenas o sistema final.
function ProjectFlow() {
  const { t } = useLang()
  const f = t.cta.flow
  return (
    <div className="flow" role="img" aria-label={f.label}>
      <div className="flow__steps" aria-hidden="true">
        {f.steps.map((step, i) => (
          <span key={step} className={`flow__step flow__step--${i + 1}`}>
            {step}
          </span>
        ))}
      </div>
      <div className="flow__track" aria-hidden="true">
        <div className="flow__bar" />
      </div>
      <div className="flow__stage" aria-hidden="true">
        <div className="flow__layer flow__layer--1">
          <p className="flow__cap">{f.requestCaption}</p>
          <div className="flow__bubble">
            <span className="flow__dots">
              <i />
              <i />
              <i />
            </span>
            <span className="flow__typed">{f.request}</span>
          </div>
          <p className="flow__meta">{f.requestMeta}</p>
        </div>

        <div className="flow__layer flow__layer--2">
          <p className="flow__cap">{f.proposalCaption}</p>
          <div className="flow__doc">
            {f.proposal.map((line, i) => (
              <div key={line} className={`flow__check flow__check--${i + 1}`}>
                <svg viewBox="0 0 20 20" width="18" height="18">
                  <path d={CHECK} fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{line}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flow__layer flow__layer--3">
          <p className="flow__cap">stock.ts</p>
          <div className="flow__code">
            {[
              [46, 0],
              [62, 8],
              [38, 8],
              [54, 16],
              [30, 16],
              [44, 8],
              [18, 0],
            ].map(([width, indent], i) => (
              <i key={i} className={`flow__line flow__line--${i + 1}`} style={{ width: `${width}%`, marginLeft: `${indent}%` }} />
            ))}
          </div>
        </div>

        <div className="flow__layer flow__layer--4">
          <p className="flow__cap">{f.systemCaption}</p>
          <div className="flow__app">
            <div className="flow__app-head">
              <span>{f.systemTitle}</span>
              <span className="flow__live">{f.published}</span>
            </div>
            {f.stores.map(([store, qty], i) => (
              <div key={store} className={`flow__row flow__row--${i + 1}`}>
                <span>{store}</span>
                <b>{qty}</b>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Conversão: a mesma acção principal do hero, mais o WhatsApp.
export default function Cta() {
  const { t } = useLang()
  return (
    <section id="proposta" className="section" aria-labelledby="cta-title">
      <div className="wrap">
        <div className="cta">
          <div className="cta__copy">
            <h2 id="cta-title" className="title cta__title">
              {t.cta.title}
            </h2>
            <p>{t.cta.text}</p>
            <div className="cta__actions">
              <a className="btn btn--light" href={whatsappLink(t.cta.whatsappSubject)} target="_blank" rel="noreferrer">
                {t.cta.primary}
              </a>
              <a className="btn btn--field" href={whatsappLink()} target="_blank" rel="noreferrer">
                {t.cta.whatsapp}
              </a>
            </div>
          </div>
          <ProjectFlow />
        </div>
      </div>
    </section>
  )
}
