import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

// As chaves servem para receber a propriedade de modo desconstruido
function FormularioCadastro({ aoEnviar }) {
  // Estados
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});
  // Efeitos
  useEffect(() => {
    if (etapaAtual === formularios.length-1) {
      aoEnviar(dadosColetados);
    }
  });
  
  const formularios = [
    <DadosUsuario aoEnviar={coletarDados}/>,
    <DadosPessoais aoEnviar={coletarDados}/>,
    <DadosEntrega aoEnviar={coletarDados}/>,
    <Typography variant="h5">Obrigado pelo cadastro!</Typography>
  ];

  function coletarDados(dados) {
    // spread operator vai inserir os dados do vetor um a um e não o vetor todo como um elemento único
    setDados({ ...dadosColetados, ...dados });
    proximo();
  }
  
  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Dados pessoais</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
