import React, { useState } from "react";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";

function DadosPessoais({ aoEnviar, validacoes }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const [errors, setErrors] = useState({ 
        cpf: { 
            valido: true, 
            texto: ""
        }, 
        nome: { 
            valido: true, 
            texto: ""
        }
    });

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
        <form 
            onSubmit = {event => {
                event.preventDefault();
                if(possoEnviar()) {
                    aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
                } 
            }
        }>

            <TextField 
                value = { nome }
                onChange = {event => {                
                    setNome(event.target.value);
                }}
                onBlur = { validarCampos }
                error = { !errors.nome.valido }
                helperText = { errors.nome.texto }
                label = "Nome" 
                name = "nome"
                required
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
                name = "sobrenome"
                required
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
                name = "cpf"
                required
                variant = "outlined" 
                onBlur = { validarCampos }
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
            >Próximo</Button>

        </form>
    );
}

export default DadosPessoais;
