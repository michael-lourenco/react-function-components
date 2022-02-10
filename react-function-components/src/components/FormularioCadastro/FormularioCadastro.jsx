import React, { useState } from "react";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";

function FormularioCadastro() {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");

    return (
        <form 
            onSubmit = {event => {
                event.preventDefault();
                console.log(nome, sobrenome);
            }
        }>

            <TextField 
                value = { nome }
                onChange = {event => {
                    let tempNome = event.target.value;
                    if(tempNome.length >= 3) {
                        tempNome = tempNome.substring(0, 3);
                    }                   
                    setNome(tempNome);
                }}
                label = "Nome" 
                variant = "outlined" 
                id = "nome" 
                margin = "dense" 
                fullWidth 
            />

            <TextField 
                value = { sobrenome}
                onChange = {event => {
                    setSobrenome(event.target.value);
                }}
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
