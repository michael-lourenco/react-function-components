import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

function DadosEntrega({ aoEnviar }){
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");   
    return(
        <form onSubmit = { event => {
            event.preventDefault();
            aoEnviar({ cep, endereco, numero, estado, cidade });
        }}>
            <TextField
                value = { cep }
                onChange = { event => {
                    setCep(event.target.value);
                }}
                type = "number"
                label = "cep" 
                name = "cep"
                variant = "outlined" 
                id = "cep" 
                margin = "dense" 
            />

            <TextField  
                value = { endereco }
                onChange = { event => {
                    setEndereco(event.target.value);
                }}
                type = "text"
                label = "Endereço" 
                name = "endereco"
                variant = "outlined" 
                id = "endereco" 
                margin = "dense" 
                fullWidth 
            />

            <TextField  
                value = { numero }
                onChange = { event => {
                    setNumero(event.target.value);
                }}
                type = "number"
                label = "Número" 
                name = "numero"
                variant = "outlined" 
                id = "numero" 
                margin = "dense" 
            />
            
            <TextField  
                value = { estado }
                onChange = { event => {
                    setEstado(event.target.value);
                }}
                type = "text"
                label = "Estado" 
                name = "estado"
                variant = "outlined" 
                id = "estado" 
                margin = "dense" 
            />

            <TextField  
                value = { cidade }
                onChange = { event => {
                    setCidade(event.target.value);
                }}
                type = "text"
                label = "Cidade" 
                name = "cidade"
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
