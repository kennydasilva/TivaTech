import { useState } from 'react'
import digitise from '../assets/photos/digitise.jpg'
import integrate from '../assets/photos/integrate.jpg'
import products from '../assets/photos/products.jpg'
import { useLang } from '../LangContext'

const IMAGES = [digitise, products, integrate]

// Proposta de valor em três separadores; cada um mostra a sua fotografia.
export default function WhatWeDo() {
  const { t } = useLang()
  const [active, setActive] = useState(0)
  const tabs = t.whatWeDo.tabs

  return (
    <section className="section" aria-labelledby="oque-title">
      <div className="wrap">
        <h2 id="oque-title" className="title title--section section__title--center" data-reveal>
          {t.whatWeDo.title}
        </h2>
        <div className="split split--tabs">
          <div className="tabs" role="tablist" aria-label={t.whatWeDo.title}>
            {tabs.map((tab, i) => {
              const on = i === active
              return (
                <div key={tab.title} className={`tabs__item${on ? ' is-on' : ''}`}>
                  <button
                    type="button"
                    role="tab"
                    id={`tab-${i}`}
                    aria-selected={on}
                    aria-controls="tab-painel"
                    className="tabs__button"
                    onClick={() => setActive(i)}
                  >
                    {tab.title}
                  </button>
                  {on && (
                    <div className="tabs__body">
                      <p>{tab.text}</p>
                      <a className="btn tabs__action" href="#servicos">
                        {t.whatWeDo.action}
                      </a>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          <div id="tab-painel" role="tabpanel" aria-labelledby={`tab-${active}`} className="tabs__panel">
            <img key={active} src={IMAGES[active]} alt="" width={1400} height={933} loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
