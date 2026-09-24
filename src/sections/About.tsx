import Eyebrow from '../components/Eyebrow'
import team from '../assets/equipa.jpg'

export default function About() {
  return (
    <section className="section about" id="sobre">
      <img className="about__photo" src={team} alt="Equipa TIVA TECH" />
      <div className="about__text">
        <Eyebrow>SOBRE NÓS</Eyebrow>
        <h2 className="title">Ideias em soluções digitais.</h2>
        <p className="about__lead">
          Sentamo-nos com quem usa o sistema todos os dias e transformamos processos confusos em
          ferramentas claras.
        </p>
        <p className="text">
          Negócios locais, PME, startups e grandes empresas, sempre com um responsável técnico
          dedicado.
        </p>
      </div>
    </section>
  )
}
