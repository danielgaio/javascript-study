import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";
import React, { useState } from "react";

// As chaves servem para receber a propriedade de modo desconstruido
function DadosPessoais({aoEnviar, validacoes}) {
  // retorna tupla com variavel e função que a modifica
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });
  
  function validarCampos(event) {
    const { name, value } = event.target;
    const ehValido = validacoes[name](value);
    const novoEstado = { ...erros, name: ehValido };
    setErros(novoEstado);
    console.log(novoEstado);
  }

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
    }}>
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        name="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        label="Promoções"
        control={<Switch
          checked={promocoes}
          onChange={(event) => {
            setPromocoes(event.target.checked);
          }}
          name="promocoes"
          color="primary"
        />}
      />
      <FormControlLabel
        label="Novidades"
        control={<Switch
          checked={novidades}
          onChange={(event) => {
            setNovidades(event.target.checked);
          }}
          name="novidades"
          color="primary"
        />}
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais;
