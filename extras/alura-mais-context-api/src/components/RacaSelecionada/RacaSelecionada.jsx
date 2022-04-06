import React from "react";
import RacaSelecionadaContext from "../../context/racaSelecionada";
import "./styles.scss";

const RacaSelecionada = () => (
  <RacaSelecionadaContext.Consumer>
    {(racaSelecionada) => (
      <div className={`raca-selecionada`}>
        {/* <h2 className="raca-selecionada__nome">{racaSelecionada.name}</h2> */}
        {/* <p className="Selecionada-selecinada__info">
          <span className="Selecionada-selecinada__info__descricao">
            Tempo de vida:
          </span>
          {racaSelecionada.life_span}
        </p> */}
        <img
          alt="Imagem de raca"
          className="raca-selecionada__imagem"
          src={racaSelecionada.imagem}
        />
      </div>
    )}
  </RacaSelecionadaContext.Consumer>
);

export default RacaSelecionada;
