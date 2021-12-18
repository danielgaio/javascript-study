/**
 * Ser autenticavel significa ter o método autenticar
 * ducky type (o autenticavel da função login()). Comum em linguagem fracamente
 * tipadas.
 * Definition: duck typing is a style of dynamic typing in which an object's
 * current set of methods and properties determines the valid semantics, rather
 * than its inheritance from a particular class or implementation of a specific
 * interface.
 */

export class SistemaAutenticacao{
  static login(autenticavel, senha) {
    if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
      return autenticavel.autenticar(senha);
    }
    return false;
  }
  static ehAutenticavel(autenticavel) {
    return "autenticar" in autenticavel &&
      autenticavel.autenticar instanceof Function
  }
}
