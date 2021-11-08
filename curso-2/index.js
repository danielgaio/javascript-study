import { Cliente } from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

// instanciar novos clientes
const cliente1 = new Cliente("Ricardo", 11122233309, 123456789);
// cliente1.nome = "Ricardo";
// cliente1.cpf = 11122233309;
// cliente1.rg = 123456789;
console.log(cliente1);
console.log("CPF de %s: %s", cliente1.nome, cliente1.cpf)
const cliente2 = new Cliente("Alice", 88855533309, 100457689);
// cliente2.nome = "Alice";
// cliente2.cpf = 88855533309;
// cliente2.rg = 100457689;
console.log("CPF de %s: %s", cliente2.nome, cliente2.cpf);
console.log(cliente2.cpf)

// instanciando novas contas
const conta1 = new ContaCorrente(cliente1, 1001);
// conta1.agencia = 1001;
// conta1.cliente = cliente1;
console.log(conta1);
const conta2 = new ContaCorrente(cliente2, 102);
// conta2.cliente = cliente2;
// conta2.agencia = 102;
// conta2.cliente = new Cliente();
// conta2.cliente.nome = "Alice";
// conta2.cliente.cpf = 88855533309;
// conta2.cliente.rg = 100457689;
console.log(conta2);

// faz deposito
console.log("\n");
conta1.depositar(100);
console.log(conta1.depositar(-10));
conta1.depositar(100);

// faz saque
console.log("\n");
conta1.exibirSaldo();
const valorSacado = conta1.sacar(50);
console.log("Valor sacado de %s: %s", conta1.cliente.nome, valorSacado);
// conta1.exibirSaldo();
console.log("Saldo atual de %s: %s", conta1.cliente.nome, conta1.saldo)

// transferir valor
console.log("\n");
// conta1.exibirSaldo();
console.log("Saldo atual de %s: %s", conta1.cliente.nome, conta1.saldo)
// conta2.exibirSaldo();
console.log("Saldo atual de %s: %s", conta2.cliente.nome, conta2.saldo)
conta1.transferir(50, conta2);
console.log(
  "Realizada transferência de %s para %s",
  conta1.cliente.nome,
  conta2.cliente.nome
);
// conta2.exibirSaldo();
console.log("Saldo atual de %s: %s", conta2.cliente.nome, conta2.saldo)
// conta1.exibirSaldo();
console.log("Saldo atual de %s: %s", conta1.cliente.nome, conta1.saldo)

// exibindo o numero de contas
console.log("Numero de contas: %s", ContaCorrente.numeroDeContas);

