import React from "react";
import RacasContext from "../../context/racas";
import "./styles.scss";

const ListaRacas = () => {
  return (
    <RacasContext.Consumer>
      {({ racas, selecionaRaca }) => (
        <ul className="lista-racas">
          {racas.map((raca) => (
            <li
              className="lista-racas__item"
              key={raca.id}
              onClick={() => selecionaRaca(raca.name)}
            >
              {raca.name}
            </li>
          ))}
        </ul>
      )}
    </RacasContext.Consumer>
  );
};

export default ListaRacas;
