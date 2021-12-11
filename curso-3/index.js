import { Cliente } from "./Cliente.js";
import { ContaCorrente } from ".//Conta/Corrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

// instanciar novos clientes
const cliente1 = new Cliente("Ricardo", 11122233309, 123456789);

// instanciando novas contas
const contaCorrente1 = new ContaCorrente(cliente1, 1001);

// faz deposito
contaCorrente1.depositar(100);
console.log(contaCorrente1.depositar(-10));
contaCorrente1.depositar(100);

// faz saque
console.log("\n");
contaCorrente1.exibirSaldo();
const valorSacado = contaCorrente1.sacar(50);
contaCorrente1.sacar(50);
// console.log("Valor sacado de %s: %s", contaCorrente1.cliente.nome, valorSacado);
// contaCorrente1.exibirSaldo();
// console.log("Saldo atual de %s: %s", contaCorrente1.cliente.nome, contaCorrente1.saldo);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar(10);

// console.log(contaPoupanca);
// console.log(contaCorrente1);

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);
console.log(contaSalario);
