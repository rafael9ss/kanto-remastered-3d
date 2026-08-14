# Rolagem suave até a oferta

Hoje os botões de CTA usam âncora `#oferta` e o navegador "salta" direto para a seção. A ideia é o lead clicar e a página descer rolando, como um scroll normal.

## O que muda

- Ao clicar em qualquer CTA (Hero, Nostalgia, Bônus, Rodapé), a página desce com animação suave até a seção de Oferta, em vez de pular na hora.
- Pequeno respiro no topo, para o título da oferta não colar na borda da tela ao terminar a rolagem.
- Os botões de checkout (links de pagamento) continuam iguais — só as âncoras internas ganham a rolagem.
- Quem tiver "reduzir movimento" ativado no celular/PC continua com o salto imediato (acessibilidade).

## Detalhes técnicos

- Em `src/styles.css`: `html { scroll-behavior: smooth; }` + `scroll-padding-top` de ~1.5rem, dentro de uma media query `prefers-reduced-motion: no-preference`.
- Em `src/components/landing/ui.tsx` (`Cta`): quando o `href` começa com `#`, interceptar o clique e usar `scrollIntoView({ behavior: "smooth", block: "start" })`, com fallback para o comportamento padrão — garante funcionamento consistente nos navegadores mobile (iOS/Android) onde `scroll-behavior` às vezes é ignorado.
