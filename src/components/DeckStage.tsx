import {
  Children,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactElement,
} from 'react'
import './DeckStage.css'

type DeckStageProps = {
  width?: number
  height?: number
  children: ReactElement | ReactElement[]
}

const IDLE_MS = 1800
const INTERACTIVE = 'a, button, input, select, textarea, label, [role="button"], [contenteditable]'

function readHash(total: number): number {
  const m = window.location.hash.match(/^#(\d+)$/)
  if (!m) return 0
  const n = Number(m[1]) - 1
  return Math.min(Math.max(n, 0), total - 1)
}

export default function DeckStage({ width = 1920, height = 1080, children }: DeckStageProps) {
  const slides = Children.toArray(children) as ReactElement[]
  const total = slides.length

  const [index, setIndex] = useState(() => readHash(total))
  const [scale, setScale] = useState(1)
  const [overlayVisible, setOverlayVisible] = useState(true)
  const [overlayPinned, setOverlayPinned] = useState(false)
  const idleTimer = useRef<number | undefined>(undefined)

  const go = useCallback(
    (n: number) => setIndex(Math.min(Math.max(n, 0), total - 1)),
    [total],
  )
  const advance = useCallback((d: number) => setIndex((i) => Math.min(Math.max(i + d, 0), total - 1)), [total])

  const showOverlay = useCallback(() => {
    setOverlayVisible(true)
    window.clearTimeout(idleTimer.current)
    idleTimer.current = window.setTimeout(() => setOverlayVisible(false), IDLE_MS)
  }, [])

  // Letterboxed fit of the fixed design canvas into the viewport.
  useLayoutEffect(() => {
    const fit = () => setScale(Math.min(window.innerWidth / width, window.innerHeight / height))
    fit()
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [width, height])

  // Keep the URL hash in sync so a slide can be deep-linked.
  useEffect(() => {
    const hash = `#${index + 1}`
    if (window.location.hash !== hash) window.history.replaceState(null, '', hash)
    showOverlay()
  }, [index, showOverlay])

  useEffect(() => {
    const onHash = () => go(readHash(total))
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [go, total])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const t = e.target as HTMLElement | null
      if (t && t.closest('input, textarea, select, [contenteditable]')) return

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case 'PageDown':
        case ' ':
          advance(1)
          break
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          advance(-1)
          break
        case 'Home':
        case 'r':
        case 'R':
          go(0)
          break
        case 'End':
          go(total - 1)
          break
        default:
          if (/^[1-9]$/.test(e.key)) go(Number(e.key) - 1)
          else return
      }
      e.preventDefault()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [advance, go, total])

  useEffect(() => {
    const onMove = () => showOverlay()
    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.clearTimeout(idleTimer.current)
    }
  }, [showOverlay])

  // Touch devices: tapping the left/right half of the stage goes prev/next.
  const onStageClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!window.matchMedia('(hover: none)').matches) return
    if ((e.target as HTMLElement).closest(INTERACTIVE)) return
    advance(e.clientX < window.innerWidth / 2 ? -1 : 1)
  }

  return (
    <div className="deck">
      <div className="deck-stage" onClick={onStageClick}>
        <div className="deck-canvas" style={{ width, height, transform: `scale(${scale})` }}>
          {slides.map((slide, i) => (
            <div
              key={i}
              className="deck-slide"
              data-deck-active={i === index ? '' : undefined}
              aria-hidden={i !== index}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div
        className="deck-overlay"
        role="toolbar"
        aria-label="Controlos da apresentação"
        data-visible={overlayVisible || overlayPinned ? '' : undefined}
        onMouseEnter={() => setOverlayPinned(true)}
        onMouseLeave={() => setOverlayPinned(false)}
        onFocus={() => setOverlayPinned(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOverlayPinned(false)
        }}
      >
        <button className="deck-btn" type="button" aria-label="Slide anterior" title="Anterior (←)" onClick={() => advance(-1)}>
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M10 3L5 8l5 5" />
          </svg>
        </button>
        <span className="deck-count" aria-live="polite">
          <span>{index + 1}</span>
          <span className="sep">/</span>
          <span className="total">{total}</span>
        </span>
        <button className="deck-btn" type="button" aria-label="Slide seguinte" title="Seguinte (→)" onClick={() => advance(1)}>
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 3l5 5-5 5" />
          </svg>
        </button>
        <span className="deck-divider" />
        <button className="deck-btn reset" type="button" aria-label="Voltar ao primeiro slide" title="Reset (R)" onClick={() => go(0)}>
          Reset<span className="kbd">R</span>
        </button>
      </div>
    </div>
  )
}
