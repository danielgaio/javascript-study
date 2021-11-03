import { Cliente } from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

// instanciar novos clientes
const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.rg = 123456789;
console.log(cliente1);
const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88855533309;
cliente2.rg = 100457689;
console.log(cliente2);

// instanciando novas contas
const conta1 = new ContaCorrente();
conta1.agencia = 1001;
conta1.cliente = cliente1;
console.log(conta1);
const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;
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
console.log("Valor sacado de %s: %s",conta1.cliente.nome ,valorSacado);
conta1.exibirSaldo();

// transferir valor
console.log("\n");
conta1.exibirSaldo();
conta2.exibirSaldo();
conta1.transferir(50, conta2);
console.log(
  "Realizada transferência de %s para %s",
  conta1.cliente.nome,
  conta2.cliente.nome
);
conta2.exibirSaldo();
conta1.exibirSaldo();
