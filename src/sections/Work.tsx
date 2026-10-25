import { useEffect, useRef } from 'react'
import appPoster from '../assets/projects/app-treino-poster.jpg'
import appVideo from '../assets/projects/app-treino.mp4'
import sgditPoster from '../assets/projects/sgdit-poster.jpg'
import sgditVideo from '../assets/projects/sgdit.mp4'
import { useLang } from '../LangContext'

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

// Projectos reais, cada um com um recorte do seu vídeo promocional.
export default function Work() {
  const { t } = useLang()
  return (
    <section id="projectos" className="section" aria-labelledby="proj-title">
      <div className="wrap">
        <div className="section__head">
          <div>
            <h2 id="proj-title" className="title title--section" data-reveal>
              {t.work.title}
            </h2>
            <p className="lead section__lead">{t.work.lead}</p>
          </div>
          <a className="btn btn--ghost" href="#projectos">
            {t.work.all}
          </a>
        </div>
        <div className="cases">
          {t.work.items.map((item, i) => (
            <article key={item.name} className="case" data-reveal>
              <ProjectVideo src={MEDIA[i].video} poster={MEDIA[i].poster} />
              <div className="case__body">
                <span className="case__kind">{item.kind}</span>
                <h3 className="case__name">{item.name}</h3>
                <p className="case__subtitle">{item.subtitle}</p>
                <p>{item.text}</p>
                <ul className="case__tags">
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
