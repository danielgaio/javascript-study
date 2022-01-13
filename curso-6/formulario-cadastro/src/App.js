import { Container, Typography } from "@material-ui/core";
import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

class App extends Component {
  render(){
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h1">Formulário de cadastro</Typography>
        <FormularioCadastro/>
      </Container>
    );
  }
}

export default App;
