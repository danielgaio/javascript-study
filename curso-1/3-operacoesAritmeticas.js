console.log("Trabalhando com variáveis");

console.log(10 + 2 / 2)

// remover itens de uma lista
// contagem começa em zero
listaDeDestinos.splice(2,1)

// exibir elemento de uma posição
console.log(listaDeDestinos[1])

console.log(10 + 2 / 2);

console.log("Conversão de tipos ");

console.log(parseInt("2") + parseInt("2"));

console.log("Trabalhando com atribuição de variáveis");

// indicado usar todas as variáveis como const, e não let
const primeiroNome = "Daniel";
const sobrenome = "Gaio";
console.log(primeiroNome + " " + sobrenome);
console.log(`Meu primeiroNome é ${primeiroNome} ${sobrenome}`);
let nomeCompleto = primeiroNome + " " + sobrenome;
console.log(nomeCompleto);
nomeCompleto = 2;
console.log(nomeCompleto);

// para contadores e indices é normal usar o let
let contador = 0;
contador = contador +1;

let idade; // declarando
idade = 24; // atribuindo
idade = idade+1;
console.log(idade);
