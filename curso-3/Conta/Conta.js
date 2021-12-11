// classe abstrata: uma classe que não pode ser instanciada diretamente
export class Conta{
  constructor(saldoInicial, cliente, agencia) {
    if (this.constructor == Conta) {
      throw new Error("Objeto do tipo conta não deve ser instanciado diretamente, pois essa é uma classe abstrata")
    } 
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }
  
  // metodo abstrato
  sacar(valor) {
    throw new Error("O método sacar da conta é abstrato e deve ser sobreescrito");
  }

  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    } else {
      return 0;
    }
  }

  depositar(valor) {
    // Técnica early returning: analisar casos de erro no inicio
    if (valor <= 0) return "Erro: Deposito de valor zero ou negativo";

    this._saldo += valor;
    console.log("Depósito de %s para %s", valor, this._cliente.nome);
  }

  exibirSaldo() {
    console.log("Saldo atual de %s: %s",this._cliente.nome, this._saldo);
  }

  // variáveis primitivas (valor) chegam na função como cópias, enquanto que
  // em objetos (conta) chega o original. Então alterar o objeto neste escopo
  // vai altera-lo no escopo externo, já com a variável primitiva isso não
  // acontece. Objetos são passados por referência.
  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
