export const CHECKOUT_BASICO = "https://go.perfectpay.com.br/PPU38CQF8CB";
export const CHECKOUT_PREMIUM = "https://go.perfectpay.com.br/PPU38CQF6N2";

const artwork = (id: number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

export const ball = {
  poke: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png",
  great: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/great-ball.png",
  ultra: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png",
};

export const jogos = [
  { nome: "Pokémon Red Remastered 3D", art: artwork(6), cor: "poke-red" as const },
  { nome: "Pokémon Blue Remastered 3D", art: artwork(9), cor: "poke-blue" as const },
  { nome: "Pokémon Yellow Remastered 3D", art: artwork(25), cor: "poke-yellow" as const },
];

export const depoimentos = [
  {
    texto: "Eu ainda gosto do jogo, mas ele já parece meio datado.",
    autor: "Fã de Pokémon clássico no Reddit",
    art: artwork(143),
  },
  {
    texto: "Como instala no celular?",
    autor: "Pergunta recorrente nos tutoriais de Pokémon clássico",
    art: artwork(52),
  },
  {
    texto: "Saudades de Pokémon Red, Blue e Yellow.",
    autor: "Comentário recorrente nas comunidades de Pokémon",
    art: artwork(133),
  },
];

export const bonus = [
  {
    titulo: "Bônus 1 — 14 Jogos Clássicos Pokémon",
    desc: "Red, Blue, Yellow, Gold, Silver, Crystal, Ruby, Sapphire, Emerald, FireRed, LeafGreen, Diamond, Pearl e Platinum.",
    valor: "R$ 97",
    art: artwork(150),
  },
  {
    titulo: "Bônus 2 — Kanto, Johto, Hoenn e Sinnoh",
    desc: "Reviva as quatro regiões clássicas que marcaram gerações.",
    valor: "R$ 47",
    art: artwork(249),
  },
  {
    titulo: "Bônus 3 — Trocas e Batalhas Online com Amigos",
    desc: "Leve a experiência além da campanha e jogue com outros treinadores.",
    valor: "R$ 47",
    art: artwork(448),
  },
  {
    titulo: "Bônus 4 — Emulador Otimizado para Celular",
    desc: "Tudo preparado para facilitar sua experiência no smartphone.",
    valor: "R$ 37",
    art: artwork(25),
  },
  {
    titulo: "Bônus 5 — Guia de Instalação Passo a Passo",
    desc: "Siga as instruções e comece a jogar sem complicação.",
    valor: "R$ 27",
    art: artwork(487),
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
