import React from "react";
import { buscaImagemPorRaca, buscaSobreRacas, buscaTodasRacas } from "./api";
import Cabecalho from "./components/Cabecalho";
import ListaRacas from "./components/ListaRacas";
import Raca from "./components/Raca";
import RacasContext from "./context/racas";
import RacaSelecionadaContext from "./context/racaSelecionada";
import StatusContext from "./context/status";
import "./styles/index.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      racasContext: {
        racas: [],
        selecionaRaca: this.selecionaRaca,
      },
      racaSelecionada: {},
      status: "Você ainda não selecionou nenhum cachorro :(",
    };
  }

  componentDidMount() {
    this.carregaInformacoesIniciais();
  }

  carregaInformacoesIniciais() {
    buscaSobreRacas()
      .then((informacoes) => {
        this.carregaListaRacas(informacoes);
      })
      .catch((erro) =>
        this.setState({
          status:
            "Oops, algo deu errado no carregamento da página. Pode tentar novamente?",
        })
      );
  }

  carregaListaRacas(sobreRacas) {
    buscaTodasRacas().then((racas) => {
      const listaRacasMostradas = sobreRacas.filter((sobre) =>
        racas.includes(sobre.name.toLowerCase())
      );
      this.setState({
        racasContext: {
          ...this.state.racasContext,
          racas: [...listaRacasMostradas],
        },
      });
    });
  }

  selecionaRaca = (raca) => {
    const infoSelecionada = this.state.racasContext.racas.filter(
      (infoRaca) => infoRaca.name === raca.toLowerCase()
    );

    buscaImagemPorRaca(raca.toLowerCase())
      .then((imagem) =>
        this.setState({
          racaSelecionada: {
            ...this.state.racaSelecionada,
            imagem,
            ...infoSelecionada[0],
          },
          status:
            "A imagem sempre será diferente, pode clicar quantas vezes quiser!",
        })
      )
      .catch((erro) => {
        const eh404 = erro.response.status === 404;
        const mensagem = eh404
          ? "Não encontramos essa raça :("
          : "Oops, algo deu errado. Pode tentar novamente?";

        this.setState({ status: mensagem });
      });
  };

  render() {
    return (
      <div className="container">
        <StatusContext.Provider value={this.state.status}>
          <Cabecalho />
        </StatusContext.Provider>

        <RacaSelecionadaContext.Provider value={this.state.racaSelecionada}>
          <Raca />
        </RacaSelecionadaContext.Provider>

        <RacasContext.Provider value={this.state.racasContext}>
          <ListaRacas />
        </RacasContext.Provider>
      </div>
    );
  }
}

export default App;
