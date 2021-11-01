// usar a crase permite iterpolar texto e variáveis com: ${}
console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;
// console.log(`Lista de destinos possíveis:`);
// console.log(salvador, saoPaulo, rioDeJaneiro);

// construtor da lista
const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`,
  `Paraná`,
);
console.log(`Lista de destinos possíveis:`);
console.log(listaDeDestinos);

listaDeDestinos.push(`Nonoai`); // adiciona elemento na lista
console.log(listaDeDestinos);

listaDeDestinos.pop(`Salvador`); // remove elemento da lista
console.log(listaDeDestinos);