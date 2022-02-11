import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

function DadosUsuario({ aoEnviar, validacoes }){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [errors, setErrors] = useState({ senha: { valido: true, texto: ""} });

    function validarCampos(event) {
        const { name, value } = event.target;
        const novoEstado  = { ...errors };
        novoEstado[name] = validacoes[name](value);
        setErrors(novoEstado);
    }

    function possoEnviar(){
        for(let campo in errors){
            if(!errors[campo].valido){
                return false;
            }
        }
        return true;
    }

    return (
        <form onSubmit = { event => {
            event.preventDefault();
            if(possoEnviar()) {
                aoEnviar({ email, senha });
            }
        }}>
            <TextField  
                value = { email }
                onChange = {event => {
                    setEmail(event.target.value);
                }}
                type = "email"
                label = "email" 
                name = "email"
                required
                variant = "outlined" 
                id = "email" 
                margin = "dense" 
                fullWidth 
            />
            
            <TextField  
                value = { senha }
                onChange = {event => {
                    setSenha(event.target.value);
                }}
                onBlur = { validarCampos }
                error = { !errors.senha.valido }
                helperText = { errors.senha.texto }
                type = "password"
                label = "senha" 
                name = "senha"
                required
                variant = "outlined" 
                id = "senha" 
                margin = "dense" 
                fullWidth 
            />

            <Button 
                type = "submit" 
                color = "primary"
                variant = "contained"
            >Próximo</Button>
        </form>
    );
}

export default DadosUsuario;
