import { useEffect, useRef } from 'react'
import appPoster from '../assets/projects/app-treino-poster.jpg'
import appVideo from '../assets/projects/app-treino.mp4'
import sgditPoster from '../assets/projects/sgdit-poster.jpg'
import sgditVideo from '../assets/projects/sgdit.mp4'
import { useLang } from '../LangContext'
import Words from '../components/Words'

const MEDIA = [
  { video: sgditVideo, poster: sgditPoster },
  { video: appVideo, poster: appPoster },
]

// Recorte do vídeo promocional do projecto: sem som, em loop, só a tocar
// quando está no ecrã. Com "reduzir movimento" fica no poster.
function ProjectVideo({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)')
    let visible = false
    const sync = () => {
      if (visible && !calm.matches) video.play().catch(() => {})
      else video.pause()
    }
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      sync()
    })
    io.observe(video)
    calm.addEventListener('change', sync)
    return () => {
      io.disconnect()
      calm.removeEventListener('change', sync)
    }
  }, [])

  return (
    <video
      ref={ref}
      className="case__video"
      src={src}
      poster={poster}
      width={540}
      height={676}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    />
  )
}

// Projectos reais em cartões: o vídeo promocional ocupa o cartão, com o
// nome e o tipo por cima, e a descrição por baixo.
export default function Work() {
  const { t } = useLang()
  return (
    <section id="projectos" className="sec sec--navy" aria-labelledby="proj-title">
      <div className="wrap">
        <h2 id="proj-title" className="sec__title words" data-reveal>
          <Words text={t.work.title} />
        </h2>
        <div className="cases">
          {t.work.items.map((item, i) => (
            <article key={item.name} className="case" data-reveal>
              <div className="case__media">
                <ProjectVideo src={MEDIA[i].video} poster={MEDIA[i].poster} />
                <div className="case__label">
                  <h3>{item.name}</h3>
                  <span>{item.kind}</span>
                </div>
              </div>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
