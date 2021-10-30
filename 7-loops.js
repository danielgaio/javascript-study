console.log(`\nTrabalhando com loops`);
const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
);

const idadeComprador = 19;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "São Paulo";

console.log("\nLista de destinos possíveis: ");
console.log(listaDeDestinos);

// operador 'or'
const podeComprar = idadeComprador >= 18 || estaAcompanhada

let contador = 0;
while (contador < 3) {
  if (listaDeDestinos[contador] == destino) {
    console.log("Destino existente");
  } else {
    console.log("Destino não existente");
  }
  contador++;
}


while(false){
    console.log(1);
}
