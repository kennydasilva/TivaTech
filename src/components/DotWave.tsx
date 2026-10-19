import { useEffect, useRef, type RefObject } from 'react'

const COLS = 72
const ROWS = 30

type Props = {
  // Elemento acima do qual a onda não sobe (o texto da capa).
  above: RefObject<HTMLElement | null>
}

// Onda de pontos azuis em perspectiva. Cada linha da grelha está mais perto do
// ecrã que a anterior; a altura de cada ponto segue duas ondas lentas e
// inclina-se um pouco com o rato.
export default function DotWave({ above }: Props) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches

    let w = 0
    let h = 0
    let top = 0
    let tilt = 0
    let tiltTo = 0
    let frame = 0

    const size = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      // A onda começa logo abaixo dos botões da capa.
      const text = above.current?.getBoundingClientRect()
      const offset = text ? text.bottom - canvas.getBoundingClientRect().top + 28 : h * 0.6
      top = Math.min(h * 0.7, offset)
      if (reduce) draw(0)
    }

    const draw = (ms: number) => {
      const t = ms / 1000
      tilt += (tiltTo - tilt) * 0.04
      ctx.clearRect(0, 0, w, h)
      for (let j = 0; j < ROWS; j++) {
        const z = j / (ROWS - 1)
        const depth = 0.3 + z * 0.7
        const yBase = top + z * (h - top) * 0.92
        ctx.globalAlpha = 0.18 + z * 0.7
        for (let i = 0; i < COLS; i++) {
          const x = i / (COLS - 1)
          const lift =
            (Math.sin(x * 7 + t * 0.7 + tilt * 2) * Math.cos(z * 5 - t * 0.5) +
              Math.sin(x * 3 - t * 0.3) * 0.5) *
            34 *
            depth
          const sx = w * 0.5 + (x - 0.5) * w * 1.5 * depth
          if (sx < -10 || sx > w + 10) continue
          ctx.fillStyle = (i * 7 + j * 3) % 11 === 0 ? '#3b78dc' : '#16479f'
          ctx.beginPath()
          ctx.arc(sx, yBase - lift, 0.7 + z * 1.9, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      ctx.globalAlpha = 1
    }

    const tick = (ms: number) => {
      draw(ms)
      frame = requestAnimationFrame(tick)
    }
    const onPointer = (e: PointerEvent) => {
      tiltTo = e.clientX / innerWidth - 0.5
    }

    size()
    document.fonts?.ready.then(size)
    addEventListener('resize', size)
    if (!reduce) {
      addEventListener('pointermove', onPointer, { passive: true })
      frame = requestAnimationFrame(tick)
    }
    return () => {
      cancelAnimationFrame(frame)
      removeEventListener('resize', size)
      removeEventListener('pointermove', onPointer)
    }
  }, [above])

  return <canvas ref={ref} className="hero__wave" aria-hidden="true" />
}
