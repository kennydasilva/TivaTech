// Idioma do site, lido do endereço: /en/ é inglês, tudo o resto é português
// (a versão principal). Cada idioma tem o seu endereço, para o visitante
// partilhar a página certa e os motores de busca indexarem as duas.
export type Lang = 'pt' | 'en'

export function langFromPath(pathname: string): Lang {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'pt'
}

// Mantém a secção em que o visitante está quando troca de idioma.
export function pathFor(lang: Lang, hash = '') {
  return `/${lang}/${hash}`
}
