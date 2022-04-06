import React from "react";
import Status from "../Status";
import "./styles.scss";

const Cabecalho = () => {
  return (
    <div className="cabecalho">
      <h1 className="cabecalho__titulo">Seja bem-vindo ao InfoCão</h1>
      <p className="cabecalho__texto">
        Clique em um nome e te daremos informações úteis sobre a raça e uma
        imagem bem bonita.
      </p>

      <Status />
    </div>
  );
};

export default Cabecalho;
