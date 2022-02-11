import React, { useState, useContext } from "react";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErrors from "../../hooks/useErrors";

function DadosPessoais({ aoEnviar }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const validacoes = useContext(ValidacoesCadastro);
    const [errors, validarCampos, possoEnviar] = useErrors(validacoes);

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
