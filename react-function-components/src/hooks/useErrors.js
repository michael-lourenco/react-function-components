import React, { useState } from 'react';

function useErrors (validacoes) {

    const estadoInicial = criarEstadoInicial(validacoes);
    const [errors, setErrors] = useState(estadoInicial);
    
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

    return [errors, validarCampos, possoEnviar];
}

function criarEstadoInicial(validacoes) {
    const estadoInicial = {};
    for (const campo in validacoes) {
        estadoInicial[campo] = { valido: true, texto: "" };
    }

    return estadoInicial;
}

export default useErrors;
