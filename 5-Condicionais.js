console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
);

const idadeComprador = 21;
console.log("Lista de destinos possíveis: ");
console.log(listaDeDestinos);

if(idadeComprador >= 18){
  console.log("Comprador maior de idade")
  listaDeDestinos.splice(1,1);
}
console.log("Comprador não é maior de idade e não posso vender")

console.log(listaDeDestinos);