import React from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Container component = "article" maxWidth="sm">
      <h1>Formulário de Cadastro</h1>
      <FormularioCadastro />
    </Container>
  );
}

export default App;
