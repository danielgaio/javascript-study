// class ModuloDeImpressao {
//   constructor() {
//     this._codigo = 10;
//   }

//   imprime(nomes) {
//     nomes.forEach(nome => {
//       console.log(`${this._codigo}: ${nome}`);
//     });
//   }
// }

// const professores = ['Elias', 'Yuri', 'Gabriel', 'Guilherme', 'Yan'];
// const impressao = new ModuloDeImpressao();
// impressao.imprime(professores);

// usando o metodo bind()
class ModuloDeImpressao {
    constructor() {
        this._codigo = 10;
    }
    imprime(nomes) {
        nomes.forEach(function(nome) {
        console.log(`${this._codigo}: ${nome}`);
     }.bind(this));
   }
}

const professores = ['Elias', 'Yuri', 'Gabriel', 'Guilherme', 'Yan'];
const impressao = new ModuloDeImpressao();
impressao.imprime(professores);

// retorno
const soma = (numero1, numero2) => numero1 + numero2; 
result = soma(3,7) // 10
console.log(result)

// nome
const arrow = () => { };
console.log(arrow.name);

// arrow functions não podem ser usadas para criar construtores
const Construtor = () => { };
new Construtor();
