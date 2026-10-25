// Contactos da TIVA TECH, usados em todo o site.
// O número de WhatsApp é o dos vídeos promocionais. A CONFIRMAR: as
// ligações das redes sociais ainda estão vazias.
export const WHATSAPP_NUMBER = '258833354327'
export const WHATSAPP_LABEL = '+258 83 335 4327'
export const EMAIL = 'info@tivatech.co.mz'

export const SOCIAL = {
  whatsapp: '',
  instagram: '',
  facebook: '',
  telegram: '',
}

export function whatsappLink(subject?: string) {
  const text = subject
    ? `Olá, TIVA TECH. Gostava de falar sobre: ${subject}.`
    : 'Olá, TIVA TECH. Gostava de falar sobre um projecto.'
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}
