import { useEffect, useRef, useState, type CSSProperties } from 'react'
import bgVideo from '../assets/bg.mp4'
import mark from '../assets/t-branco.png'
import Words from '../components/Words'
import { useLang } from '../LangContext'

const TYPE_MS = 75
const DELETE_MS = 35
const HOLD_MS = 1800
const GAP_MS = 350

// Escreve cada palavra letra a letra, espera, apaga e passa à seguinte.
// Com "reduzir movimento" troca a palavra inteira de 3 em 3 segundos.
function useTypewriter(words: string[]) {
  const [text, setText] = useState('')

  useEffect(() => {
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let word = 0
    let timer: number

    if (calm) {
      const show = () => {
        setText(words[word])
        word = (word + 1) % words.length
        timer = window.setTimeout(show, 3000)
      }
      timer = window.setTimeout(show, 0)
      return () => window.clearTimeout(timer)
    }

    let chars = 0
    let deleting = false
    const tick = () => {
      const full = words[word]
      if (!deleting) {
        chars += 1
        setText(full.slice(0, chars))
        if (chars === full.length) {
          deleting = true
          timer = window.setTimeout(tick, HOLD_MS)
          return
        }
        timer = window.setTimeout(tick, TYPE_MS)
      } else {
        chars -= 1
        setText(full.slice(0, chars))
        if (chars === 0) {
          deleting = false
          word = (word + 1) % words.length
          timer = window.setTimeout(tick, GAP_MS)
          return
        }
        timer = window.setTimeout(tick, DELETE_MS)
      }
    }
    timer = window.setTimeout(tick, GAP_MS)
    return () => window.clearTimeout(timer)
  }, [words])

  return text
}

// Ecrã inteiro com vídeo lento por trás; o "T" grande à esquerda e, ao lado,
// "Especializada em" com os serviços a escreverem-se sozinhos.
export default function Hero() {
  const { t } = useLang()
  const ref = useRef<HTMLVideoElement>(null)
  const typed = useTypewriter(t.hero.words)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => {
      video.playbackRate = 0.5
      if (calm.matches) video.pause()
      else video.play().catch(() => {})
    }
    sync()
    video.addEventListener('loadedmetadata', sync)
    calm.addEventListener('change', sync)
    return () => {
      video.removeEventListener('loadedmetadata', sync)
      calm.removeEventListener('change', sync)
    }
  }, [])

  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <video ref={ref} className="hero__bg" src={bgVideo} muted loop playsInline preload="auto" aria-hidden="true" />
      <div className="wrap hero__content">
        <img className="hero__mark" src={mark} alt="" width={190} height={159} data-reveal />
        <div>
          <h1 id="hero-title" className="visually-hidden">
            {t.hero.title}
          </h1>
          <p className="hero__lead words" aria-hidden="true" data-reveal>
            <Words text={t.hero.lead} />
          </p>
          <p
            className="hero__typed"
            aria-hidden="true"
            data-reveal
            style={{ '--reveal-delay': '500ms' } as CSSProperties}
          >
            {typed}
            <span className="hero__cursor" />
          </p>
        </div>
      </div>
    </section>
  )
}
