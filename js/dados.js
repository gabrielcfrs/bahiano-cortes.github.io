// =============================================
// AÇAI DOBAHIANO - DADOS DO CARDÁPIO
// Arquivo: js/dados.js
//
// COMO ADICIONAR UM ITEM NOVO:
// 1. Copie um bloco { ... } existente
// 2. Cole depois da última vírgula
// 3. Mude nome, descricao, preco, imagem e categoria
// 4. Para categoria, use: "acai" ou "acompanhamentos"
// =============================================

// 'const' cria uma variável que não muda (constante)
// 'ITENS' é o nome que damos à nossa lista de lanches
// Os colchetes [ ] indicam que é uma lista (variedade) de objetos
const ITENS = [
  {
    nome: "Corte social",
    descricao: "Corte social clássico, perfeito para todas as ocasiões.",
    preco: "R$ 29,00",
    precoNum: 29.00,
    categoria: "cortes",
    imagem: "../img/social.png"
  },
  {
    nome: "Corte degradê",
    descricao: "Corte degradê, perfeito para todas as ocasiões.",
    preco: "R$ 35,00",
    precoNum: 35.00,
    categoria: "cortes",
    imagem: "../img/degrade.png "
  },
  {
    nome: "Pézinho",
    descricao: "Aparar os pelos da nuca e das laterais, deixando um acabamento limpo e elegante.",
    preco: "R$ 20,00",
    precoNum: 20.00,
    categoria: "cortes",
    imagem: "../img/pezinho.png"
  },
  {
    nome: "Progressiva",
    descricao: "Alisa os cabelos, reduz o volume e controla o frizz, proporcionando um visual liso e sedoso.",
    preco: "R$ 80,00",
    precoNum: 80.00,
    categoria: "outros",
    imagem: "../img/progressiva.png"
  },
  {
    nome: "Luzes",
    descricao: "Luzes, perfeito para dar um toque de cor e estilo aos seus cabelos.",
    preco: " Apartir de R$ 60,00",
    precoNum: 60.00,
    categoria: "outros",
    imagem: "../img/luzes.png"
  },
  {
    nome: "Sombrancelha",
    descricao: "Sombrancelha, perfeito para realçar a expressão do seu rosto e destacar seus olhos.",
    preco: "R$ 10,00",
    precoNum: 10.00,
    categoria: "outros",
    imagem: "../img/sombrancelha.png"
  },
  {
    nome: "Platinado",
    descricao: "Platinado, perfeito para dar um visual moderno e elegante aos seus cabelos.",
    preco: " Apartir de R$ 120,00",
    precoNum: 120.00,
    categoria: "outros",
    imagem: "../img/platinado.png"
  },{
    nome: "Combo corte + barba + sombrancelha",
    descricao: "Combo com corte, barba e sombrancelha, perfeito para um visual impecável.",
    preco: "R$ 70,00",
    precoNum: 70.00,
    categoria: "combos",
    imagem: "../img/COMBO.png"
  },{
    nome: "Barba",
    descricao: "Barba, alimento ideal para seu visual.",
    preco: "R$ 35,00",
    precoNum: 35.00,
    categoria: "barba",
    imagem: "../img/barba.png"
  },{
    nome: "Corte + Sombrancelha",
    descricao: "corte + sombrancelha, perfeito para um visual impecável.",
    preco: "R$ 40,00",
    precoNum: 40.00,
    categoria: "combos",
    imagem: "../img/corte e som.png"
  },{
    nome: "Barbaterapia",
    descricao: "barbaterapia, relaxamento e cuidado para a pele do rosto, proporcionando uma experiência de bem-estar e rejuvenescimento.",
    preco: "R$ 50,00",
    precoNum: 50.00,
    categoria: "barba",
    imagem: "../img/barbaterapia.png"
  },
];

// =============================================
// BEBIDAS
// Para adicionar: copie um bloco e cole abaixo
// =============================================

const BEBIDAS = [
  {
    nome: "Pomada de cabelo",
    descricao: "Pomada de cabelo, perfeita para modelar e estilizar os cabelos, proporcionando um visual duradouro e com brilho.",
    preco: "R$ 35,00",
    precoNum: 35.00,
    imagem: "../img/pomada.png"
  },{
    nome: "Creme hidratante",
    descricao: "Creme para pentear, perfeito para hidratar e desembaraçar os cabelos, proporcionando um visual saudável e brilhante.",
    preco: "R$ 35,00",
    precoNum: 35.00,
    imagem: "../img/creme.png"
  },
  {
    nome: "Espuma de Barbear",
    descricao: "Espuma de barbear, perfeita para amaciar os pelos e facilitar o processo de barbear, proporcionando um resultado suave e confortável.",
    preco: "R$ 50,00",
    precoNum: 50.00,
    imagem: "../img/espuma.png"
  }
];
