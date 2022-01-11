import React, { Component } from 'react';
import "./estilo.css";

class ListaDeCategorias extends Component {

  _handleEventoInput(e) {
    if (e.key == "Enter") {
      console.log("Adicionar categoria");
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          <li className="lista-categorias_item">Categoria1</li>
          <li className="lista-categorias_item">Categoria2</li>
          <li className="lista-categorias_item">Categoria3</li>
          <li className="lista-categorias_item">Categoria4</li>
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
