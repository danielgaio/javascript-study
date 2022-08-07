import { render, screen } from "@testing-library/react";
import React from "react";
import api from "./api";
import App from "./App";

jest.mock("./api");

describe("Requisições para API", () => {
  it("Exibir lista de transações através da API", async () => {
    // a chamada abaixo é assincrona, então deve-se esperar a conclusão da mesma
    api.listaTransacoes.mockResolvedValue([
      {
        transacao: "deposito",
        valor: "20",
        data: "14/07/2022",
        id: 5,
      },
      {
        transacao: "saque",
        valor: "100",
        data: "14/07/2022",
        id: 6,
      },
    ]);

    // renderizar componente
    render(<App />);
    // fazer busca com await para algum componente interno
    expect(await screen.findByText("saque")).toBeInTheDocument();
    // ai sim fazer teste desejado
    expect(screen.getByTestId("transacoes").children.length).toBe(2);
  });
});
