const numerosPares = [2, 4, 6]
const numerosImpares = [1, 3, 5]

// Os três pontos são o destruction, que abre o array e pega os elementos do mesmo
const numeros = [...numerosPares, ...numerosImpares]
console.log(numeros)

// outra forma de uso
const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5, 6]
console.log(num1, num2, outrosNumeros)

const [nome1 = 'Ju'] = [1]
console.log(nome1)
