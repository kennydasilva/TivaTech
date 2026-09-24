import Eyebrow from '../components/Eyebrow'

const services = [
  { tag: 'WEB', title: 'Sistemas web à medida', text: 'Plataformas, portais e painéis de gestão.' },
  { tag: 'MOBILE', title: 'Aplicações Android e iOS', text: 'Do protótipo à App Store e Google Play.' },
  { tag: 'WEBSITES', title: 'Desenvolvimento de websites', text: 'Rápidos, responsivos e otimizados para o Google.' },
  { tag: 'AUTOMAÇÃO', title: 'Automação de processos', text: 'Relatórios, alertas e aprovações automáticos.' },
  { tag: 'GESTÃO', title: 'Gestão de domínio e website', text: 'Estabilidade, segurança e presença sempre activa.' },
  { tag: 'CONSULTORIA', title: 'Consultoria em TI', text: 'Diagnóstico e escolha de tecnologia.' },
]

export default function Services() {
  return (
    <section className="section services" id="servicos">
      <div className="container">
        <Eyebrow>SERVIÇOS</Eyebrow>
        <h2 className="title">Tudo o que a sua empresa precisa em tecnologia.</h2>
        <div className="services__grid">
          {services.map((s) => (
            <div className="service" key={s.tag}>
              <div className="service__tag">{s.tag}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
