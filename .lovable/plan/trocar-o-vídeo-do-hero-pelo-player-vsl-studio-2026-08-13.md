# Trocar o vídeo do Hero pelo player VSL Studio

Substituir o player do YouTube por embed externo:

```html
<div data-vsl="pokemon"></div>
<script src="https://vsl-studio.netlify.app/e.js" async></script>
```

## O que muda

- `src/components/landing/HeroVideo.tsx` é reescrito: toda a lógica da IFrame API do YouTube (carregamento do script, autoplay mudo, botão "Clique aqui para ativar o som", seekTo(0), estado de falha) é removida.
- O componente passa a renderizar apenas a `<div data-vsl="pokemon">` dentro da moldura escura atual, e injeta o script `e.js` uma única vez no `document.head` (com guarda para não duplicar em re-render/HMR).
- O script é carregado logo após a montagem, mantendo `async`. Como o player VSL traz o próprio controle de som/play, a camada de overlay e o botão de som deixam de existir.
- `src/routes/__root.tsx`: os `preconnect`/`dns-prefetch` do YouTube saem e entra um `preconnect` para `https://vsl-studio.netlify.app`.

## Observações

- A proporção da moldura (`aspect-[3/4]`) fica como está por padrão; se o novo VSL for 16:9 o player pode aparecer com faixas. Posso ajustar para altura automática após ver o vídeo rodando.
- Nada mais da página muda: copy, CTAs, pixel/UTMs e Clarity seguem iguais.
