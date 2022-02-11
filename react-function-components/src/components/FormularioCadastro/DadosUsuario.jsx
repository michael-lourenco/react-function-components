import React, { useState,useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErrors from '../../hooks/useErrors';

function DadosUsuario({ aoEnviar }){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const validacoes = useContext(ValidacoesCadastro);
    const [errors, validarCampos, possoEnviar] = useErrors(validacoes);

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
