import { useLang } from '../LangContext'

// Ligações para as secções, usadas no topo e no rodapé.
export default function NavLinks() {
  const { t } = useLang()
  return (
    <>
      <a href="#servicos">{t.nav.services}</a>
      <a href="#projectos">{t.nav.work}</a>
      <a href="#sobre">{t.nav.about}</a>
      <a href="#contacto">{t.nav.contact}</a>
    </>
  )
}
