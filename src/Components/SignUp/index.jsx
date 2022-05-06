import {useState} from "react";
import styled from "styled-components";

export default function SignUp(){
    // const [nome, setNome] = useState("");
    // const [email, setEmail] = useState("");
    // const [senha, setSenha] = useState("");
    // const [confirmacaoSenha, setConfirmacaoSenha] = useState("");

    return (
        <>
            <Logotipo><h1>MyWallet</h1></Logotipo>
            
        </>
    )
}

const body = styled.div`
    color: #8C11BE;
`

const Logotipo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    h1{
        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;
        color:#FFFFFF;
    }
`

const credenciais = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    input{

    }
`