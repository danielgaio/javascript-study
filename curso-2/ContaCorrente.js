export class ContaCorrente{
  agencia;
  // até esse momento o # ainda não está implementado e o padrão da comunidade
  // é usar um '_' no começo pra sinalizar que ela é privada. 
  #saldo = 0;

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
    // console.log(this.#saldo);
  }
  exibirSaldo() {
    console.log(this.#saldo);
  }
}
