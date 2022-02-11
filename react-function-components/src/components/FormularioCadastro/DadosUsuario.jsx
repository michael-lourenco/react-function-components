import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

function DadosUsuario({ aoEnviar }){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <form onSubmit = { event => {
            event.preventDefault();
            aoEnviar({ email, senha });
        }}>
            <TextField  
                value = { email }
                onChange = {event => {
                    setEmail(event.target.value);
                }}
                type = "email"
                label = "email" 
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
                type = "password"
                label = "senha" 
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
            >Cadastrar</Button>
        </form>
    );
}

export default DadosUsuario;
