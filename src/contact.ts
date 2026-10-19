// Contactos da TIVA TECH, usados em todo o site.
// A CONFIRMAR: o número de WhatsApp e as ligações das redes sociais são
// provisórios. Trocar pelos reais antes de publicar.
export const WHATSAPP_NUMBER = '258000000000'
export const WHATSAPP_LABEL = '+258 00 000 0000'
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
