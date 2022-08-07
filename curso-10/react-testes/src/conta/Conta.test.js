import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Conta from "./Conta";

describe("Componente de conta", () => {
  it("Snapshot do componente de conta", () => {
    const { container } = render(<Conta />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("Exibir o saldo da conta como valor monetário", () => {
    // primeiro renderizar o componente que quero testar
    render(<Conta saldo={1000} />);
    const saldo = screen.getByTestId("saldo-conta");
    expect(saldo.textContent).toBe("R$ 1000");
  });

  it("Chama a função de realizar transação, quando o botão é clicado", () => {
    // primeiro renderizar o componente a ser testado
    const funcaoRealizarTransacao = jest.fn(); // função mock, de simulação
    render(<Conta saldo={1000} realizarTransacao={funcaoRealizarTransacao} />);
    fireEvent.click(screen.getByText("Realizar operação"));
    expect(funcaoRealizarTransacao).toHaveBeenCalled();
  });
});
