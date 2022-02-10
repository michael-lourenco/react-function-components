import React from 'react';
import { Button, TextField, Switch } from '@material-ui/core';

function FormularioCadastro() {

    return (
        <form>

            <TextField label = "Nome" variant = "outlined" id = "nome" margin = 'dense' fullWidth />

            <TextField label = "Sobrenome" variant = "outlined" id = "sobrenome" margin = 'dense' fullWidth />

            <TextField label = "CPF" variant = "outlined" id = "cpf" margin = 'dense' fullWidth />

            <Switch label = "Promoções" id = "promocoes"  />

            <Switch label = "Novidades" id = "novidades" />

            <Button 
                type = "submit"
                variant = "contained"
                color = "primary"
            >Cadastrar</Button>
        </form>
    );
}

export default FormularioCadastro;
