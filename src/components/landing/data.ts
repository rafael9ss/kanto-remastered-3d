export const CHECKOUT_BASICO = "https://go.perfectpay.com.br/PPU38CQF8CB";
export const CHECKOUT_PREMIUM = "https://go.perfectpay.com.br/PPU38CQF6N2";

import art6 from "@/assets/media/poke/6.webp";
import art9 from "@/assets/media/poke/9.webp";
import art25 from "@/assets/media/poke/25.webp";
import art150 from "@/assets/media/poke/150.webp";
import art249 from "@/assets/media/poke/249.webp";
import art448 from "@/assets/media/poke/448.webp";
import art487 from "@/assets/media/poke/487.webp";
import pokeBall from "@/assets/media/poke/poke-ball.webp";
import greatBall from "@/assets/media/poke/great-ball.webp";
import ultraBall from "@/assets/media/poke/ultra-ball.webp";

export const ball = {
  poke: pokeBall,
  great: greatBall,
  ultra: ultraBall,
};


export const jogos = [
  { nome: "Pokémon Red Remastered 3D", art: art6, cor: "poke-red" as const },
  { nome: "Pokémon Blue Remastered 3D", art: art9, cor: "poke-blue" as const },
  { nome: "Pokémon Yellow Remastered 3D", art: art25, cor: "poke-yellow" as const },
];

export const bonus = [
  {
    titulo: "Bônus 1 — + 50 Jogos Clássicos Pokémon",
    desc: "Red, Blue, Yellow, Gold, Silver, Crystal, Ruby, Sapphire, Emerald, FireRed, LeafGreen, Diamond, Pearl e Platinum.",
    valor: "R$ 97",
    art: art150,
  },
  {
    titulo: "Bônus 2 — Kanto, Johto, Hoenn e Sinnoh",
    desc: "Reviva as quatro regiões clássicas que marcaram gerações.",
    valor: "R$ 47",
    art: art249,
  },
  {
    titulo: "Bônus 3 — Trocas e Batalhas Online com Amigos",
    desc: "Leve a experiência além da campanha e jogue com outros treinadores.",
    valor: "R$ 47",
    art: art448,
  },
  {
    titulo: "Bônus 4 — Emulador Otimizado para Celular",
    desc: "Tudo preparado para facilitar sua experiência no smartphone.",
    valor: "R$ 37",
    art: art25,
  },
  {
    titulo: "Bônus 5 — Guia de Instalação Passo a Passo",
    desc: "Siga as instruções e comece a jogar sem complicação.",
    valor: "R$ 27",
    art: art487,
  },
];

export const faq = [
  {
    q: "Quais jogos vêm no Pokémon 3D Remastered?",
    a: "Você recebe Pokémon Red, Blue e Yellow remasterizados com o mod 3D aplicado.",
  },
  {
    q: "Funciona no celular?",
    a: "Sim. Há versões para Android e PC.",
  },
  {
    q: "Preciso entender de emulador ou configuração?",
    a: "Não. Você recebe um tutorial rápido de instalação para seguir passo a passo.",
  },
  {
    q: "Recebo os bônus também?",
    a: "Sim. A oferta inclui os 5 bônus apresentados nesta página.",
  },
  {
    q: "Vou receber atualizações?",
    a: "Sim. O acesso inclui as atualizações disponibilizadas para melhorar a experiência do jogo.",
  },
  {
    q: "Como funciona a garantia?",
    a: "Você tem 14 dias de garantia. Se achar que o produto não é para você, pode solicitar o reembolso dentro desse período.",
  },
];

