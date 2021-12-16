// import { Cliente } from "./Cliente.js";
// import { ContaCorrente } from ".//Conta/Corrente.js";
// import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
// import { ContaSalario } from "./Conta/ContaSalario.js";

// // instanciar novos clientes
// const cliente1 = new Cliente("Ricardo", 11122233309, 123456789);

// // instanciando novas contas
// const contaCorrente1 = new ContaCorrente(cliente1, 1001);

// // faz deposito
// contaCorrente1.depositar(100);
// console.log(contaCorrente1.depositar(-10));
// contaCorrente1.depositar(100);

// // faz saque
// console.log("\n");
// contaCorrente1.exibirSaldo();
// const valorSacado = contaCorrente1.sacar(50);
// contaCorrente1.sacar(50);
// // console.log("Valor sacado de %s: %s", contaCorrente1.cliente.nome, valorSacado);
// // contaCorrente1.exibirSaldo();
// // console.log("Saldo atual de %s: %s", contaCorrente1.cliente.nome, contaCorrente1.saldo);

// const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
// contaPoupanca.sacar(10);

// // console.log(contaPoupanca);
// // console.log(contaCorrente1);

// const contaSalario = new ContaSalario(cliente1);
// contaSalario.depositar(100);
// contaSalario.sacar(10);
// console.log(contaSalario);

import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

// No vs code selecionar paravra e pressionar ctrl+d para achar próxima referência e editar todas ao mesmo tempo

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo", 5000, 12345633445);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 24743468345, 3456643223, "12345");
// a função de login é polimórfica
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "12345");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);
