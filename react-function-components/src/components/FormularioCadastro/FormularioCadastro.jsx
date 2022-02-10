import React, { useState } from "react";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";

function FormularioCadastro({ aoEnviar, validarCPF }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const [errors, setErrors] = useState({ cpf: { valido: true, texto: ""} });

    return (
        <form 
            onSubmit = {event => {
                event.preventDefault();
                aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
            }
        }>

            <TextField 
                value = { nome }
                onChange = {event => {                
                    setNome(event.target.value);
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
                value = { cpf }
                onChange = {event => {                
                    setCpf(event.target.value);
                }}
                label = "CPF" 
                variant = "outlined" 
                onBlur = {event => {
                        const ehValido = validarCPF(cpf);
                        setErrors({ cpf: ehValido});
                    }
                }
                error = { !errors.cpf.valido }
                helperText = { errors.cpf.texto }
                id = "cpf" 
                margin = "dense" 
                fullWidth 
            />

            <FormControlLabel 
                control = { 
                    <Switch 
                        checked = { promocoes }
                        name = "promocoes" 
                        onChange = {event => {                
                            setPromocoes(event.target.checked);
                        }}
                        id = "promocoes" 
                        color = "primary" 
                    /> 
                    } 
                label = "Promoções" 
            />

            <FormControlLabel 
                control = {
                    <Switch 
                        checked = { novidades }
                        name = "novidades" 
                        onChange = {event => {                
                            setNovidades(event.target.checked);
                        }}
                        id = "novidades" 
                        color = "primary" 
                    /> 
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
