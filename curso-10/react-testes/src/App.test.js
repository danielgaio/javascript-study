import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import App, { calcularNovoSaldo } from "./App";

// describe serve para criar e descrever um contexto de testes
describe("Componente principal", () => {
  describe("Quando eu abro o app do banco", () => {
    test("O nome do banco é exibido", () => {
      render(<App />);
      expect(screen.getByText("ByteBank")).toBeInTheDocument();
    });

    it("O saldo é exibido", () => {
      render(<App />);
      expect(screen.getByText("Saldo:")).toBeInTheDocument;
    });

    it("O botão de realizar transação é exibido", () => {
      render(<App />);
      expect(screen.getByText("Realizar operação")).toBeInTheDocument;
    });
  });

  describe("Quando eu realizo uma transação", () => {
    it("que é um saque, o valor vai diminuir", () => {
      const valores = { transacao: "saque", valor: 50 };
      const novoSaldo = calcularNovoSaldo(valores, 150);
      expect(novoSaldo).toBe(100);
    });

    it("que é um saque, a transação deve ser realizada", () => {
      // const { getByText, getByTestId, getByLabelText } = render(<App />);
      render(<App />);

      // usar o screen para interagir com o componente renderizado
      const saldo = screen.getByText("R$ 1000");
      const transacao = screen.getByLabelText("Saque");
      const valor = screen.getByTestId("valor");
      const botaoTransacao = screen.getByText("Realizar operação");

      expect(saldo.textContent).toBe("R$ 1000");
      // simular a ação do usuário
      fireEvent.click(transacao, { target: { value: "saque" } });
      fireEvent.change(valor, { target: { value: 10 } });
      fireEvent.click(botaoTransacao);
      expect(saldo.textContent).toBe("R$ 990");
    });

    // Atividade: teste de um saque maior do que o valor da conta
    it("de saque com valor maior que o saldo da conta", () => {
      const { getByText, getByTestId, getByLabelText } = render(<App />);
      const saldo = getByText("R$ 1000");
      const transacao = getByLabelText("Saque");
      const valor = getByTestId("valor");
      const botaoTransacao = getByText("Realizar operação");
      expect(saldo.textContent).toBe("R$ 1000");
      // simular a ação do usuário
      fireEvent.click(transacao, { target: { value: "saque" } });
      fireEvent.change(valor, { target: { value: 20 } });
      fireEvent.click(botaoTransacao);
      const saldoSplitted = saldo.textContent.split(" ");
      expect(parseInt(saldoSplitted[1])).toBeGreaterThanOrEqual(0);
    });
  });
});
