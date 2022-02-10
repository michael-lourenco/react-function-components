import React from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';
import '@fontsource/roboto';

function App() {
  return (
    <Container component = "article" maxWidth="sm">
      <Typography variant = "h3" component = "h1" >Formulário de Cadastro</Typography>
      <FormularioCadastro />
    </Container>
  );
}

export default App;
