const numerosPares = [2, 4, 6]
const numerosImpares = [1, 3, 5]

// Os três pontos são o destruction, que abre o array e pega os elementos do mesmo
const numeros = [...numerosPares, ...numerosImpares]
console.log(numeros)

// outra forma de uso
const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5, 6]
console.log(num1, num2, outrosNumeros)

// Ju é o valor padrão, caso nada seja recebido.
const [nome1 = 'Ju'] = [1]
console.log(nome1)

const pessoa = {
  nome: 'Ju',
  idade: 25
}

// adicionar mais um campo ao objeto pessoa. Sem o destruction '...' ia ficar o objeto inteiro mais o telefone
const pessoaComTelefone = { ...pessoa, telefone: 12121212121 }
console.log(pessoa, pessoaComTelefone)

const { nomePessoa } = pessoa
console.log(nomePessoa)

// outra forma de destruction. Do objeto recebido já na listagem de parâmetros
function imprimeDados({nome, idade}) {
  console.log(nome, idade)
}

imprimeDados(pessoa)
