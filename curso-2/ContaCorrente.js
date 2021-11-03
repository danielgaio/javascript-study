export class ContaCorrente{
  agencia;
  // até esse momento o # ainda não está implementado e o padrão da comunidade
  // é usar um '_' no começo pra sinalizar que ela é privada. 
  #saldo = 0;
  cliente;

  sacar(valor) {
    if (this.#saldo >= valor) {
      this.#saldo -= valor;
      return valor;
    } else {
      console.log("Não há saldo para sacar")
    }
  }

  depositar(valor) {
    // Técnica early returning: analisar casos de erro no inicio
    if (valor <= 0) return "Erro: Deposito de valor zero ou negativo";

    this.#saldo += valor;
    console.log("Depósito de %s para %s", valor, this.cliente.nome);
  }

  exibirSaldo() {
    console.log("Saldo atual de %s: %s",this.cliente.nome, this.#saldo);
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
