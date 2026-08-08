# Landing page — Pokémon 3D Remastered 2026

Página única de vendas em português, mobile-first, com todas as seções na ordem exata pedida e a copy literal fornecida.

## Direção visual

- Paleta Red/Blue/Yellow sobre base preta: vermelho `#E3350D`, azul `#0A6BC4`, amarelo `#FFCB05`, preto `#0B0B0F`, com off-white para texto.
- Clima "aventura Pokémon cinematográfica": fundo escuro, brilhos suaves de cor, bordas arredondadas, cards com profundidade, muito respiro entre seções.
- Tipografia forte e legível: display condensada e pesada para títulos, sans limpa para corpo.
- Amarelo como cor dos CTAs (contraste máximo no fundo escuro), botões grandes, largura total no mobile, repetidos em Hero, Nostalgia, Bônus, Oferta e Rodapé.
- Âncora de preço sempre visível: "De R$ X" riscado ao lado do preço final em destaque.
- Selos: compra segura, garantia 14 dias, Android/iOS/PC.

## Imagens

Prioridade para as imagens reais do produto que você anexou (screenshots do Pokémon 1ª geração em 3D), publicadas como assets no CDN e usadas assim:

- Hero: screenshot da cidade em 3D com pôr do sol (image-2) como fundo cinematográfico + o celular na mão jogando (image-4) como destaque do produto; bloco 16:9 reservado para a VSL.
- O que você recebe: grade com as telas 3D (image, image-3, image-7) e a foto no PC/monitor (image-5), mostrando celular e PC.
- Reviva o Pokémon da sua infância: comparativo 1996 vs 2026 (image-6) em destaque + cena de Kanto em 3D.
- Prova social: cards de comentário montados em HTML (visual de Reddit/fórum), com artes oficiais do site de referência como avatar — sem inventar print falso.
- Bônus: 5 cards usando as artes oficiais de Pokémon (PokeAPI) já utilizadas no site de referência para identificar cada bônus/região.
- Garantia: selo de 14 dias — único item realmente gerado (PNG transparente).

Sprites, ícones de pokébola e artes oficiais vêm dos mesmos assets públicos do site de referência; nada mais é gerado sem necessidade.


## Seções (ordem exata)

1. **Hero** — headline, subheadline, bloco de VSL, CTA "QUERO REVIVER Pokemon EM 3D", badges Android/iOS/PC, faixa "Pokémon 3D Remastered 2026 · Red. Blue. Yellow."
2. **O que você recebe** — imagem + 3 cards dos jogos + checklist (mod aplicado, versões, tutorial, atualizações).
3. **Reviva o Pokémon da sua infância de um jeito novo** — imagem imersiva, lista de benefícios "sem...", CTA "QUERO REVIVER KANTO EM 3D".
4. **Prova social** — 3 cards de comentário com autoria.
5. **Bônus** — 5 cards, valor riscado + "GRÁTIS" em destaque, total R$ 255, CTA.
6. **Oferta** — 2 cards (Básico R$ 97 → R$ 17,90; Premium destacado R$ 197 → R$ 29,90 com todos os bônus), checklists, botões de checkout, selos.
7. **Garantia** — selo + copy dos 14 dias.
8. **FAQ** — accordion (shadcn Accordion), 6 perguntas.
9. **Rodapé** — CTA final, selos e disclaimer.

## Detalhes técnicos

- Reescrever `src/routes/index.tsx` como a landing, com componentes por seção em `src/components/landing/`.
- Tokens de cor/gradientes/sombras adicionados em `src/styles.css` (@theme inline, oklch); fontes carregadas via `<link>` no `__root.tsx`.
- Accordion do shadcn; sem backend.
- SEO: `head()` próprio na rota `/` com title, description, og e twitter.
- Checkout: os dois botões de plano usam constantes `CHECKOUT_BASICO` / `CHECKOUT_PREMIUM` em um único arquivo; enquanto as URLs reais não forem informadas, os demais CTAs rolam até a seção de Oferta. Basta enviar os links para eu trocar em um lugar só.
