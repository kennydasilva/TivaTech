import { Fragment, type CSSProperties } from 'react'

// Parte o texto em palavras para entrarem uma a uma, com desfoque, como na
// abertura. Usar dentro de um elemento com className "words" e data-reveal:
// a animação começa quando esse elemento entra no ecrã (ver index.css).
export default function Words({ text }: { text: string }) {
  const words = text.split(' ')
  return (
    <>
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span style={{ '--i': i } as CSSProperties}>{word}</span>
          {i < words.length - 1 && ' '}
        </Fragment>
      ))}
    </>
  )
}
