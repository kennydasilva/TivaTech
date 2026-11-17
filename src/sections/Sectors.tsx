import { useLang } from '../LangContext'

// Ícones de linha, um por sector, pela mesma ordem do content.ts.
const ICONS = [
  // Comércio: loja com toldo
  'M4 10h16M5 10l1.5-5h11L19 10M5 10v9h14v-9M5 10a2.3 2.3 0 0 0 4.7 0a2.3 2.3 0 0 0 4.6 0a2.3 2.3 0 0 0 4.7 0M10 19v-5h4v5',
  // Serviços públicos: edifício com colunas
  'M3 9l9-5 9 5M4 9h16M6 9v8M10 9v8M14 9v8M18 9v8M3 20h18M4 17h16',
  // Saúde e bem-estar: coração com pulso
  'M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10zM7 12h3l1.5-2.5 2 4.5 1.5-2h2',
  // Transporte e logística: camião
  'M3 6h11v10H3zM14 9h4l3 3.5V16h-7M7 18.5a1.5 1.5 0 1 0 0-.01M17 18.5a1.5 1.5 0 1 0 0-.01',
  // Educação: livro aberto
  'M12 7c-2-1.5-5-2-8-1.5v12c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5v-12c-3-.5-6 0-8 1.5zM12 7v12',
]

// Sectores numa lista com linhas: ícone pequeno, nome e uma frase.
export default function Sectors() {
  const { t } = useLang()
  return (
    <section id="sectores" className="sec sec--white" aria-labelledby="sectores-title">
      <div className="wrap">
        <h2 id="sectores-title" className="sec__title" data-reveal>
          {t.sectors.title}
        </h2>
        <ul className="sectors">
          {t.sectors.items.map((item, i) => (
            <li key={item.title} className="sector" data-reveal>
              <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
                <path d={ICONS[i]} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
