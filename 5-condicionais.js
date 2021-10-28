console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
);

const idadeComprador = 19;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Lista de destinos possíveis: ");
console.log(listaDeDestinos);

// operador 'or'
if(idadeComprador >= 18 || estaAcompanhada){
  console.log("Comprador maior de idade ou esta acompanhado. Boa viagem!");
  listaDeDestinos.splice(1,1); // Remove item
}else{
  console.log("Comprador não é maior de idade e não posso vender");
}

console.log("Embarque: \n");
// operador 'and'
if (idadeComprador >= 18 && temPassagemComprada) {
  console.log("Embarque permitido");
} else {
  console.log("Embarque não é permitido");
}

console.log(listaDeDestinos);

// logic operators
console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador == 18);


