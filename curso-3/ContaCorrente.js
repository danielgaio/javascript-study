import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
  static numeroDeContas = 0;
  constructor(cliente, agencia) {
    super(0, cliente, agencia); // chama o construtor de Conta
    ContaCorrente.numeroDeContas += 1;
  }
}
