import { useState, type FormEvent } from 'react'
import { EMAIL, WHATSAPP_LABEL, whatsappLink, whatsappMessage } from '../contact'
import { useLang } from '../LangContext'

// Formulário curto que abre o WhatsApp com a mensagem já escrita (não há
// servidor por trás). Ao lado, onde estamos e os contactos directos.
export default function Contact() {
  const { t } = useLang()
  const c = t.contact
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')

  const send = (e: FormEvent) => {
    e.preventDefault()
    let intro = `${c.from} ${name.trim()}`
    if (company.trim()) intro += ` ${c.of} ${company.trim()}`
    const text = `${c.greeting} ${intro}.\n\n${message.trim()}`
    window.open(whatsappMessage(text), '_blank', 'noopener')
  }

  return (
    <section id="contacto" className="sec sec--blue" aria-labelledby="contacto-title">
      <div className="wrap split">
        <div>
          <h2 id="contacto-title" className="sec__title" data-reveal>
            {c.title}
          </h2>
          <p className="contact__text" data-reveal>
            {c.text}
          </p>
          <dl className="contact__info" data-reveal>
            <div>
              <dt>{c.where}</dt>
              <dd>{c.city}</dd>
            </div>
            <div>
              <dt>{c.write}</dt>
              <dd>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </dd>
              <dd>
                <a href={whatsappLink()} target="_blank" rel="noreferrer">
                  WhatsApp {WHATSAPP_LABEL}
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <form className="form" onSubmit={send} data-reveal>
          <label>
            {c.name}
            <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required />
          </label>
          <label>
            {c.company}
            <input value={company} onChange={(e) => setCompany(e.target.value)} autoComplete="organization" />
          </label>
          <label>
            {c.message}
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} required />
          </label>
          <button className="button" type="submit">
            {c.send}
          </button>
        </form>
      </div>
    </section>
  )
}
