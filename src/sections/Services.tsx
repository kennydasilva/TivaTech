import tWhite from '../assets/t-branco.png'

// Cada cartão mostra o serviço num desenho antes de o dizer. Os desenhos são
// exemplos ilustrativos, feitos em SVG/HTML nas cores da marca.

const BLUE = '#16479f'
const WIRE = '#c4d4ee'

function WebDrawing() {
  const paths = ['M164 45 C 230 45, 240 118, 312 118', 'M164 118 L 312 118', 'M164 191 C 230 191, 240 118, 312 118']
  const places = [
    { y: 20, label: 'Escritório', icon: 'M30 32h22v26H30z M35 38h4M43 38h4M35 45h4M43 45h4M39 58v-6h4v6' },
    { y: 93, label: 'Loja', icon: 'M28 113l3-8h20l3 8z M30 113v18h22V113 M37 131v-9h8v9' },
    { y: 166, label: 'Armazém', icon: 'M28 186l13-8 13 8v18H28z M34 204V193h14v11 M34 198h14' },
  ]
  return (
    <svg className="draw" viewBox="0 0 520 236" aria-hidden="true">
      {paths.map((d, i) => (
        <path key={d} id={`web-wire-${i}`} d={d} fill="none" stroke={WIRE} strokeWidth="3" />
      ))}
      {paths.map((d, i) => (
        <circle key={`dot-${d}`} className="draw__dot" r="5" fill={BLUE}>
          <animateMotion dur="2.4s" begin={`${i * 0.6}s`} repeatCount="indefinite">
            <mpath href={`#web-wire-${i}`} />
          </animateMotion>
        </circle>
      ))}
      {places.map((p) => (
        <g key={p.label}>
          <rect x="14" y={p.y} width="150" height="50" rx="12" fill="#fff" />
          <path d={p.icon} fill="none" stroke={BLUE} strokeWidth="2.4" strokeLinejoin="round" />
          <text x="66" y={p.y + 31} className="draw__label">
            {p.label}
          </text>
        </g>
      ))}
      <rect x="312" y="26" width="194" height="184" rx="14" fill="#fff" />
      <path d="M326 26h166a14 14 0 0 1 14 14v18H312V40a14 14 0 0 1 14-14z" fill={BLUE} />
      <image href={tWhite} x="324" y="32" width="22" height="18" />
      <text x="352" y="47" className="draw__label draw__label--light">
        O seu sistema
      </text>
      <rect x="328" y="74" width="162" height="22" rx="6" fill="#eef4fd" />
      <rect x="328" y="104" width="162" height="22" rx="6" fill={BLUE} />
      <rect x="328" y="134" width="162" height="22" rx="6" fill="#eef4fd" />
      <rect x="328" y="164" width="110" height="22" rx="6" fill="#eef4fd" />
    </svg>
  )
}

function AppDrawing() {
  const icons = [
    [128, 48], [158, 48], [188, 48], [128, 78], [158, 78], [188, 78], [128, 168], [188, 168],
  ]
  return (
    <svg className="draw" viewBox="0 0 340 250" aria-hidden="true">
      <path d="M96 70 C 60 70, 70 40, 44 40" fill="none" stroke={WIRE} strokeWidth="3" strokeDasharray="6 7" />
      <path d="M244 180 C 280 180, 270 210, 296 210" fill="none" stroke={WIRE} strokeWidth="3" strokeDasharray="6 7" />
      <rect x="4" y="22" width="92" height="34" rx="17" fill="#fff" />
      <text x="50" y="44" className="draw__label" textAnchor="middle">
        App Store
      </text>
      <rect x="236" y="194" width="100" height="34" rx="17" fill="#fff" />
      <text x="286" y="216" className="draw__label" textAnchor="middle">
        Google Play
      </text>
      <rect x="112" y="14" width="116" height="226" rx="24" fill="#fff" stroke={BLUE} strokeWidth="5" />
      <rect x="152" y="24" width="36" height="7" rx="3.5" fill={BLUE} />
      {icons.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="22" height="22" rx="6" fill="#dfe8f6" />
      ))}
      <circle cx="170" cy="138" r="27" fill="none" stroke="#dfe8f6" strokeWidth="4" />
      <circle className="draw__ring" cx="170" cy="138" r="27" fill="none" stroke={BLUE} strokeWidth="4" strokeLinecap="round" transform="rotate(-90 170 138)" />
      <rect x="152" y="120" width="36" height="36" rx="10" fill={BLUE} />
      <image href={tWhite} x="158" y="128" width="24" height="20" />
      <g className="draw__done">
        <circle cx="192" cy="116" r="10" fill={BLUE} />
        <path d="M187 116l3.5 3.5 6-7" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <rect x="150" y="214" width="40" height="5" rx="2.5" fill={BLUE} />
    </svg>
  )
}

function SearchDrawing() {
  return (
    <div className="search">
      <div className="search__bar">
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <circle cx="7" cy="7" r="5" fill="none" stroke={BLUE} strokeWidth="2" />
          <path d="M11 11l4 4" stroke={BLUE} strokeWidth="2" />
        </svg>
        entregas em maputo
      </div>
      <div className="search__result">
        <small>oseunegocio.co.mz</small>
        <b>Entregas no mesmo dia</b>
        <i />
        <i />
      </div>
    </div>
  )
}

function FlowDrawing() {
  return (
    <div className="flow">
      <div className="flow__node">
        <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
          <rect x="3" y="2" width="16" height="18" rx="3" fill="none" stroke={BLUE} strokeWidth="2" />
          <path d="M7 8h8M7 12h6" stroke={BLUE} strokeWidth="2" />
        </svg>
        Novo pedido
      </div>
      <div className="flow__wire">
        <span className="flow__pulse" />
      </div>
      <div className="flow__node">
        <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
          <circle cx="11" cy="11" r="8" fill="none" stroke={BLUE} strokeWidth="2" />
          <path d="M7 11l3 3 5-6" fill="none" stroke={BLUE} strokeWidth="2" />
        </svg>
        Aprovação
      </div>
      <div className="flow__wire">
        <span className="flow__pulse" />
      </div>
      <div className="flow__node flow__node--done">
        <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
          <path d="M2 5h18v12H2z M2 5l9 7 9-7" fill="none" stroke="#fff" strokeWidth="2" />
        </svg>
        Factura enviada
      </div>
    </div>
  )
}

function StatusDrawing() {
  return (
    <div className="status" data-ui>
      <div className="status__bar">
        oseunegocio.co.mz <small>Últimos 30 dias</small>
      </div>
      <div className="status__row">
        <span>
          <span className="status__dot" />
          Website online
        </span>
        <b>99,9%</b>
      </div>
      <div className="status__row">
        <span>
          <span className="status__dot" />
          Certificado SSL
        </span>
        <b>Válido</b>
      </div>
      <div className="status__uptime">
        {Array.from({ length: 30 }, (_, i) => (
          <i key={i} />
        ))}
      </div>
    </div>
  )
}

function ConsultingDrawing() {
  return (
    <div className="compare">
      <div className="compare__pile">
        <i />
        <i />
        <i />
      </div>
      <svg className="compare__arrow" width="34" height="20" viewBox="0 0 34 20" aria-hidden="true">
        <path d="M0 9h28L21 2l2-2 11 10-11 10-2-2 7-7H0z" fill="currentColor" />
      </svg>
      <div className="compare__solid">
        <img src={tWhite} alt="" width={54} height={45} />
      </div>
    </div>
  )
}

const services = [
  { title: 'Sistemas web à medida', text: 'Painéis de gestão para o dia-a-dia.', wide: true, art: <WebDrawing /> },
  { title: 'Aplicações', text: 'Android e iOS.', wide: false, art: <AppDrawing /> },
  { title: 'Websites', text: 'Rápidos e encontrados no Google.', wide: false, art: <SearchDrawing /> },
  { title: 'Automação de processos', text: 'O trabalho repetido faz-se sozinho.', wide: true, art: <FlowDrawing /> },
  { title: 'Domínio e alojamento', text: 'Sempre no ar e seguro.', wide: true, art: <StatusDrawing /> },
  { title: 'Consultoria em TI', text: 'Da confusão ao plano certo.', wide: false, art: <ConsultingDrawing /> },
]

export default function Services() {
  return (
    <section className="services gutter" id="servicos">
      <div className="inner">
        <h2 className="section-title" data-reveal>
          O que fazemos
        </h2>
        <div className="services__grid">
          {services.map((s) => (
            <article key={s.title} className={s.wide ? 'svc svc--wide' : 'svc'} data-reveal>
              <div className="svc__art" aria-hidden="true">
                {s.art}
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
