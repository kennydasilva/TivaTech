import { useLang } from '../LangContext'

// Ligações para as secções. O topo não mostra "Sobre nós" (about=false); o
// rodapé mostra todas.
export default function NavLinks({ about = true }: { about?: boolean }) {
  const { t } = useLang()
  return (
    <>
      <a href="#servicos">{t.nav.services}</a>
      <a href="#produtos">{t.nav.products}</a>
      {about && <a href="#sobre">{t.nav.about}</a>}
      <a href="#contacto">{t.nav.contact}</a>
    </>
  )
}
