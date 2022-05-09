import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignUp() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
    const navigate = useNavigate();

    function fazerCadastro(event) {
        event.preventDefault();
        const promessa = axios.post("http://172.27.45.208:5000/sign-up", {
            name: nome,
            email,
            password: senha,
            repeat_password: confirmacaoSenha
        });
        promessa.then((resposta) => {
            console.log(resposta);
            navigate("/");
        });
        promessa.catch((err) => {
            console.log(err);
            alert("Digite os campos corretamente!");
            setNome("");
            setEmail("");
            setSenha("");
            setConfirmacaoSenha("");
        });
    }

    return (
        <>
            <Body>
                <Logotipo><h1>MyWallet</h1></Logotipo>
                <Credenciais>
                    <Formulario onSubmit={fazerCadastro}>
                        <input type="text" required value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Nome' />
                        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                        <input type="password" required value={senha} onChange={(e) => setSenha(e.target.value)} placeholder='Senha' />
                        <input type="password" required value={confirmacaoSenha} onChange={(e) => setConfirmacaoSenha(e.target.value)} placeholder='Confirme a senha' />
                        <Botao type="submit"><p>Cadastrar</p></Botao>
                    </Formulario>
                </Credenciais>
                <Login>
                    <Link to="/">
                        <p>Já tem uma conta? Entre agora!</p>
                    </Link>
                </Login>
            </Body>
        </>
    )
}

const Body = styled.div`
    background-color: #8C11BE;
    height: 100vh;
    width: 100vw;
    overflow-y: scroll;
`

const Logotipo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 70px;

    h1{
        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;
        color: #fff;
    }
`

const Credenciais = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    input {
        width: 326px;
        height: 58px;
        border-radius: 5px;
        background-color: #fff;
        margin-top: 13px;
        outline: none;
        border: 0 none;
    }

    input::placehold{
        font-family: 'Raleway', sans-serif;
        color: #000000;
        font-size: 20px;
    }
`

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Botao = styled.button`
    width: 326px;
    height: 46px;
    background-color: #A328D6;
    border: 0 none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 13px 0;
    cursor: pointer;

    p{
        font-family: 'Raleway', sans-serif;
        color: #FFFFFF;
        font-weight: 700;
        font-size: 20px;
    }
`

const Login = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        font-family: 'Raleway', sans-serif;
        color: #FFFFFF;
        font-size: 15px;
        font-weight: 700;
        text-decoration-line: none;
    }
`

