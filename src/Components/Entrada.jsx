import axios from "axios";
import { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import UserContext from "../Contexts/UserContext";

export default function Entrada() {
    const { token } = useContext(UserContext);
    const [valor, setValor] = useState("");
    const [descricao, setDescricao] = useState("");
    const navigate = useNavigate();

    function salvarEntrada(event) {
        event.preventDefault();
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.post("https://projeto-my-wallet-back.herokuapp.com/in", {
            value: valor,
            describe: descricao
        }, config);
        promise.then((resposta) => {
            console.log(resposta);
            navigate("/home");
        });
        promise.catch()
    }


    return (
        <>
            <Body>
                <Header>Nova entrada</Header>
                <Informacoes>
                    <Formulario onSubmit={salvarEntrada}>
                        <input type="number" required value={valor} onChange={(e) => setValor(e.target.value)} placeholder='Valor' />
                        <input type="text" required value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder='Descrição' />
                        <Botao type="submit"><p>Salvar entrada</p></Botao>
                    </Formulario>
                </Informacoes>
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

const Header = styled.header`
    box-sizing: border-box;
    height: 60px;

    h1{
        font-family: 'Raleway', sans-serif;
        font-size: 26px;
        font-weight: 700;
        color: #fff;
    }
`

const Informacoes = styled.div`
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

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`