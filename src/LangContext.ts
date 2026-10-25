import { createContext, useContext } from 'react'
import { content, type Content } from './content'
import type { Lang } from './i18n'

export const LangContext = createContext<{ lang: Lang; t: Content }>({ lang: 'pt', t: content.pt })

export function useLang() {
  return useContext(LangContext)
}
