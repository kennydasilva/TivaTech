# TivaTech

Website da TivaTech em React + TypeScript (Vite). A homepage segue a arquitectura definida para o site (posicionamento, serviços, prova, método, confiança e acção) e tem a Hotmart como referência visual, em azul e branco.

## Desenvolvimento

```bash
npm install
npm run dev      # servidor local
npm run build    # build de produção em dist/
npm run lint
```

## Idiomas

- Português em `/pt/` (e na raiz), inglês em `/en/`. O selector no cabeçalho troca de idioma sem perder a secção.
- Todos os textos estão em `src/content.ts`, um objecto por idioma.
- O alojamento tem de servir o `index.html` para `/pt/` e `/en/` (regra de "SPA fallback").

## Estrutura

- `src/components/Header.tsx` — barra azul flutuante com o logótipo oficial, menu em ecrãs pequenos e selector PT/EN
- `src/components/Footer.tsx` — rodapé com marca, redes sociais, ligações e créditos das fotografias
- `src/sections/` — uma secção por ficheiro: Hero, O que fazemos (separadores), Serviços, Tecnologias (carrossel com filtros), Projectos, Porquê a TivaTech, Como trabalhamos, Sobre, Perguntas frequentes, Conversão (com a animação pedido → sistema)
- `src/sections/sections.css` — estilos das secções; cores e letras em `src/index.css`
- `src/tech.ts` — lista de tecnologias e categorias do carrossel; logótipos em `src/assets/tech/`
- `src/assets/photos/` — fotografias do Pexels e uma da Baixa de Maputo (Wikimedia Commons, CC BY-SA 2.0, creditada no rodapé)
- `src/contact.ts` — WhatsApp, e-mail e redes sociais (**a confirmar**: o número e as ligações das redes ainda são provisórios)

Identidade: branco e azuis da marca, texto corrido em tinta escura (`#1b2433`); títulos em Unbounded, texto em Work Sans.

## Por fazer

- Capturas e textos reais dos projectos (as imagens actuais são genéricas).
- Páginas internas: serviços, projectos, empresa, contactos (com formulário), privacidade e termos.
