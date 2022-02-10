import React, { useState } from "react";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";

function FormularioCadastro() {
    const [nome, setNome] = useState("Michael");

    return (
        <form 
            onSubmit = {event => {
                event.preventDefault();
                console.log(nome);
            }
        }>

            <TextField 
                value = { nome }
                onChange = {event => {
                    setNome(event.target.value);
                    if(nome.length > 3) {
                        setNome(nome.substring(0, 3))
                    }
                }}
                label = "Nome" 
                variant = "outlined" 
                id = "nome" 
                margin = "dense" 
                fullWidth 
            />

            <TextField 
                label = "Sobrenome" 
                variant = "outlined" 
                id = "sobrenome" 
                margin = "dense" 
                fullWidth 
            />

            <TextField 
                label = "CPF" 
                variant = "outlined" 
                id = "cpf" 
                margin = "dense" 
                fullWidth 
            />

            <FormControlLabel 
                control = { 
                    <Switch 
                        name = "Promoções" 
                        id = "promocoes" 
                        color = "primary" 
                        defaultChecked /> 
                    } 
                label = "Promoções" 
            />

            <FormControlLabel 
                control = {
                    <Switch 
                        name = "Novidades" 
                        id = "novidades" 
                        color = "primary" 
                        defaultChecked /> 
                    } 
                label = "Novidades" 
            />

            <Button 
                type = "submit"
                variant = "contained"
                color = "primary"
            >Cadastrar</Button>

        </form>
    );
}

export default FormularioCadastro;
