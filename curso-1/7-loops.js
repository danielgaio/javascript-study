console.log(`\nTrabalhando com loops`);
const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
);

const idadeComprador = 19;
const estaAcompanhada = true;
let temPassagemComprada = false;
// const destino = "São Paulo";
const destino = "Curitiba";

console.log("\nLista de destinos possíveis: ");
console.log(listaDeDestinos);

// operador 'or'
const podeComprar = idadeComprador >= 18 || estaAcompanhada

let contador = 0;
let destinoExiste = false;
while (contador < 3) {
  if (listaDeDestinos[contador] == destino) {
    destinoExiste = true;
    break;
  }
  contador++;
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
  console.log("Boa viagem");
} else {
  console.log("Desculpe, tivemos um erro.");
}

for (let i = 0; i < 3; i++) {
  if (listaDeDestinos[i] == destino) {
    destinoExiste = true;
  }
}
