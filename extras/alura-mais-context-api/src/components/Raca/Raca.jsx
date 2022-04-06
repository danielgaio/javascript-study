import React from "react";
import RacaSelecionadaContext from "../../context/racaSelecionada";
import RacaNaoSelecionada from "../RacaNaoSelecionada";
import RacaSelecionada from "../RacaSelecionada";

const Raca = () => (
  <RacaSelecionadaContext.Consumer>
    {({ imagem }) => {
      const racaFoiSelecionada = Boolean(imagem);
      return racaFoiSelecionada ? <RacaSelecionada /> : <RacaNaoSelecionada />;
    }}
  </RacaSelecionadaContext.Consumer>
);

export default Raca;
