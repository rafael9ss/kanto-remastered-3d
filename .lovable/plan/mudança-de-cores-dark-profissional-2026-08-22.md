# Mudança de cores: dark profissional

Trocar a paleta atual (turquesa/aqua + azul-marinho) por uma versão dark/preto profissional, mantendo vermelho, amarelo e verde como destaques de conversão. Se o resultado não agradar, a reversão será feita com um único ajuste nos tokens de cor.

## Escopo

- Ajustar tokens de cor em `src/styles.css`.
- Atualizar CSS crítico inline em `src/routes/__root.tsx`.
- Verificar/refinar componentes que usam `poke-blue`, `navy`, `aqua` ou `aqua-deep` para que fiquem legíveis no novo fundo escuro.
- Não alterar textos, preços, checkout, FAQ, upsell, notificações ou estrutura de seções.

## Mudanças de cor

### Tokens principais (oklch)

- `--poke-blue`: passa de azul para preto `oklch(0.2 0 0)` — usado no texto "Blue" e detalhes do plano.
- `--navy`: passa de azul-marinho para quase preto `oklch(0.15 0 0)` — bordas, sombras e textos fortes.
- `--aqua`: passa de turquesa para cinza-escuro `oklch(0.22 0 0)` — fundo das seções "aqua".
- `--aqua-deep`: passa de turquesa profundo para preto `oklch(0.15 0 0)` — sombras de texto e detalhes.
- `--surface`: branco `oklch(1 0 0)` (mantido).
- `--surface-2`: cinza-claro `oklch(0.96 0 0)` — mantido como contraste para seções claras.
- `--body`: cinza médio `oklch(0.45 0 0)` — mantido para corpo de texto em fundos claros.
- `--cream`: creme quente `oklch(0.975 0.028 95)` — mantido para o card de preço.

### Fundo do Hero

- `bg-kanto` deixa de ser turquesa e vira gradiente escuro:
  - Base: var(--aqua) (cinza-escuro).
  - Gradiente: do preto/cinza escuro para um cinza profissional, mantendo um leve padrão sutil (sem as listras turquesas atuais).

### Componentes a verificar

- `Hero.tsx`: texto "Blue", subtítulo, sombras do título e logo, bordas do card do vídeo.
- `Nostalgia.tsx`: seção "aqua" (agora dark), texto de fechamento, bordas de imagens.
- `Bonus.tsx`: seção "aqua" (dark), cards, texto "GRÁTIS" e valor total.
- `Recebe.tsx`: cards de jogos, bordas, textos `navy`.
- `Oferta.tsx`: bordas do Premium, selo "Mais completo", textos "Tudo do plano básico", "+ Todos os bônus", preço e card do básico.
- `ProvaSocial.tsx`: bordas e legendas.
- `Faq.tsx`: bordas do accordion e textos.
- `Garantia.tsx`: card e texto.
- `Footer` no `index.tsx`: fundo `bg-navy` (agora preto) e texto branco.

## Ajustes de legibilidade

- Em seções de fundo escuro (ex-"aqua"), manter `text-surface` para títulos e `text-body` para corpo — o branco continua legível.
- O `Check` azul passa a usar `bg-navy` (preto) ou manter um tom escuro que contraste com texto branco.
- Eyebrow amarelo mantém texto `navy` (agora preto), garantindo leitura.
- Card de preço (`Price`) mantém fundo creme e texto preto.

## CSS crítico

- Atualizar `criticalCss` em `src/routes/__root.tsx` para refletir o novo fundo escuro do Hero (aprox. `#1a1a1a` / `#0a0a0a`).

## Validação

- Verificar build após as alterações.
- Inspecionar o preview em mobile e desktop para garantir que nenhum texto suma ou fique ilegível.
- Se o visual não agradar, restaurar os tokens originais (azul/turquesa) em um segundo passo.
