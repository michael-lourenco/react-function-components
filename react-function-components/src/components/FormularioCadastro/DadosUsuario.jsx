import React from 'react';
import { Button, TextField } from '@material-ui/core';

function DadosUsuario({ aoEnviar }){
    return (
        <form onSubmit = { event => {
            event.preventDefault();
            aoEnviar();
        }}>
            <TextField  
                type = "email"
                label = "email" 
                required
                variant = "outlined" 
                id = "email" 
                margin = "dense" 
                fullWidth 
            />
            
            <TextField  
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
