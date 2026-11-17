import { useEffect } from 'react'

// Entrada das partes de cada secção: os elementos com data-reveal recebem a
// classe is-in quando entram no ecrã, uma vez, com um pequeno atraso em
// sequência. Sem JavaScript (sem a classe .js no <html>) ficam visíveis.
// Corre de novo quando muda o idioma (key), porque os textos são outros.
// Com key a null (durante a abertura) não observa nada.
export default function useReveal(key: string | null) {
  useEffect(() => {
    if (key === null) return
    const items = document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)')
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-in')
          io.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    items.forEach((el, i) => {
      if (!el.style.getPropertyValue('--reveal-delay')) el.style.setProperty('--reveal-delay', `${(i % 6) * 70}ms`)
      io.observe(el)
    })
    return () => io.disconnect()
  }, [key])
}
