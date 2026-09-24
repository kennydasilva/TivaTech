import Eyebrow from '../components/Eyebrow'

export default function Projects() {
  return (
    <section className="section projects" id="projectos">
      <div className="container">
        <Eyebrow>PROJECTOS</Eyebrow>
        <div className="projects__mark" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <h2 className="title">Brevemente</h2>
        <p className="text">Estamos a preparar os primeiros casos de estudo.</p>
      </div>
    </section>
  )
}
