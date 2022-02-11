import React from 'react';
import { Button, TextField } from '@material-ui/core';

function DadosUsuario(){
    return (
        <form>
            <TextField  
                type = "email"
                label = "email" 
                variant = "outlined" 
                id = "email" 
                margin = "dense" 
                fullWidth 
            />
            
            <TextField  
                type = "password"
                label = "senha" 
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
