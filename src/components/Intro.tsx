import { useCallback, useEffect, useRef, useState } from 'react'
import logoWhite from '../assets/logo-white.png'
import mark from '../assets/t-branco.png'
import { useLang } from '../LangContext'

// Tons da primeira frase: cada palavra um pouco mais clara que a anterior.
const SHADES = ['#18181b', '#27272a', '#3f3f46', '#52525b', '#71717a', '#a1a1aa']
const WORD_GAP = 110
const WORD_IN = 750

function shade(i: number, n: number) {
  return SHADES[Math.round((i * (SHADES.length - 1)) / Math.max(n - 1, 1))]
}

// Abertura em três tempos, por cima da página (cerca de 9 s):
// 1. a frase entra palavra a palavra sobre branco;
// 2. o fundo passa a azul e o logótipo aproxima-se;
// 3. o "T" num quadrado azul e a assinatura da marca.
// Esc, Enter, Espaço ou o botão "Saltar" terminam logo.
export default function Intro({ onDone }: { onDone: () => void }) {
  const { t } = useLang()
  const [phase, setPhase] = useState(1)
  const [leaving, setLeaving] = useState(false)
  const timers = useRef<number[]>([])
  const finished = useRef(false)

  const clear = () => {
    timers.current.forEach(window.clearTimeout)
    timers.current = []
  }

  const finish = useCallback(() => {
    if (finished.current) return
    finished.current = true
    clear()
    setLeaving(true)
    timers.current.push(window.setTimeout(onDone, 700))
  }, [onDone])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        finish()
      }
    }
    document.documentElement.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    if (!finished.current) {
      timers.current = [
        window.setTimeout(() => setPhase(2), 2900),
        window.setTimeout(() => setPhase(3), 5800),
        window.setTimeout(finish, 8700),
      ]
    }
    return () => {
      document.documentElement.style.overflow = ''
      document.removeEventListener('keydown', onKey)
      clear()
    }
  }, [finish])

  const { line1, line2 } = t.intro
  const line2Start = (line1.length - 1) * WORD_GAP + WORD_IN + 300
  const layer = (n: number) =>
    `intro__layer${phase === n ? ' is-on' : phase > n ? ' is-past' : ''}`

  return (
    <div className={`intro${phase === 2 ? ' intro--blue' : ''}${leaving ? ' is-leaving' : ''}`} aria-hidden="true">
      <div className="intro__bg" />
      <div className="intro__stage">
        <div className={layer(1)}>
          {phase === 1 && (
            <div className="intro__words">
              <p className="intro__line1">
                {line1.map((word, i) => (
                  <span key={`${word}-${i}`} className="intro__word" style={{ color: shade(i, line1.length), animationDelay: `${i * WORD_GAP}ms` }}>
                    {word}
                  </span>
                ))}
              </p>
              <p className="intro__line2">
                {line2.map((word, i) => (
                  <span key={`${word}-${i}`} className="intro__word" style={{ animationDelay: `${line2Start + i * WORD_GAP}ms` }}>
                    {word}
                  </span>
                ))}
              </p>
            </div>
          )}
        </div>

        <div className={layer(2)}>
          {phase === 2 && <img className="intro__logo intro__zoom" src={logoWhite} alt="" width={935} height={165} />}
        </div>

        <div className={layer(3)}>
          {phase === 3 && (
            <div className="intro__end">
              <div className="intro__mark intro__zoom">
                <img src={mark} alt="" width={190} height={159} />
              </div>
              <div>
                <p className="intro__slogan intro__rise" style={{ animationDelay: '200ms' }}>
                  {t.intro.slogan}
                </p>
                <p className="intro__tagline intro__rise" style={{ animationDelay: '400ms' }}>
                  {t.intro.tagline}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <button type="button" className="intro__skip" tabIndex={-1} onClick={finish}>
        {t.intro.skip}
      </button>
    </div>
  )
}
