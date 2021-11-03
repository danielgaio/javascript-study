import { Cliente } from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.rg = 123456789;
const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88855533309;
console.log(cliente1);
console.log(cliente2);


const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
console.log(contaCorrenteRicardo);

// faz deposito
contaCorrenteRicardo.depositar(100);
console.log(contaCorrenteRicardo.depositar(-10));
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);

// faz saque
contaCorrenteRicardo.exibirSaldo();
const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);
contaCorrenteRicardo.exibirSaldo();

