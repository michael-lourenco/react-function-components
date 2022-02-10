import React from 'react';
import { Button, FormControlLabel, Switch, TextField } from '@material-ui/core';

function FormularioCadastro() {
    let nome  = "";
    return (
        <form onSubmit = {event => {
                event.preventDefault();
                console.log(nome)
            }
        }>

            <TextField 
                onChange = {event => {
                    nome = event.target.value;
                }}
                label = "Nome" variant = "outlined" id = "nome" margin = 'dense' fullWidth />

            <TextField label = "Sobrenome" variant = "outlined" id = "sobrenome" margin = 'dense' fullWidth />

            <TextField label = "CPF" variant = "outlined" id = "cpf" margin = 'dense' fullWidth />

            <FormControlLabel control = { <Switch name = "Promoções" id = "promocoes" color = "primary" defaultChecked /> } label = "Promoções" />

            <FormControlLabel control = {<Switch name = "Novidades" id = "novidades" color = "primary" defaultChecked /> } label = "Novidades" />

            <Button 
                type = "submit"
                variant = "contained"
                color = "primary"
            >Cadastrar</Button>
        </form>
    );
}

export default FormularioCadastro;
