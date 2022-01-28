import React, { useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

// As chaves servem para receber a propriedade de modo desconstruido
function FormularioCadastro({aoEnviar, validarCpf}) {
  return (
    <>
      <DadosPessoais aoEnviar={aoEnviar} validarCpf={ validarCpf }/>
      <DadosUsuario />
    </>
  );
}

export default FormularioCadastro;
