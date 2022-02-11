import React from 'react';
import { Button, TextField } from '@material-ui/core';

function DadosEntrega({ aoEnviar }){
    return(
        <form onSubmit = { event => {
            event.preventDefault();
            aoEnviar();
        }}>
            <TextField  
                type = "number"
                label = "cep" 
                variant = "outlined" 
                id = "cep" 
                margin = "dense" 
            />

            <TextField  
                type = "text"
                label = "Endereço" 
                variant = "outlined" 
                id = "endereco" 
                margin = "dense" 
                fullWidth 
            />

            <TextField  
                type = "number"
                label = "Número" 
                variant = "outlined" 
                id = "numero" 
                margin = "dense" 
            />
            
            <TextField  
                type = "text"
                label = "Estado" 
                variant = "outlined" 
                id = "estado" 
                margin = "dense" 
            />

            <TextField  
                type = "text"
                label = "Cidade" 
                variant = "outlined" 
                id = "cidade" 
                margin = "dense" 
            />

            <Button 
                type = "submit" 
                color = "primary"
                variant = "contained"
                fullWidth
            >Finalizar Cadastro</Button>
        </form>
    )
}

export default DadosEntrega;
