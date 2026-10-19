# TivaTech

Website da TivaTech em React + TypeScript (Vite), baseado no design em `design/`.

## Desenvolvimento

```bash
npm install
npm run dev      # servidor local
npm run build    # build de produção em dist/
npm run lint
```

## Estrutura

- `src/components/Header.tsx` — cabeçalho azul com o logótipo oficial (branco sobre azul)
- `src/components/DotWave.tsx` — onda de pontos animada da capa (canvas)
- `src/sections/` — uma secção por ficheiro: Capa, Do papel ao sistema, Serviços, Método, Porquê nós, Rodapé
- `src/sections/sections.css` — estilos das secções; cores e letras em `src/index.css`
- `src/contact.ts` — WhatsApp, e-mail e redes sociais (**a confirmar**: o número e as ligações ainda são provisórios)

Identidade: só branco e azuis da marca; títulos em Syncopate, texto em Work Sans; desenhos e animações em vez de fotografias.
