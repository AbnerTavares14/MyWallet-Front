import {useState, useContext} from "react";
import styled from "styled-components";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
// import "reset-css";
import UserContext from "../Contexts/UserContext";

export default function SignIn(){
    const [email, setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const {setToken} = useContext(UserContext);
    const navigate = useNavigate();

    function fazerLogin(event){
        event.preventDefault();
        const promessa = axios.post("http://172.27.45.208:5000/sign-in",{
            email,
            password: senha
        });
        promessa.then((resposta) => {
            setToken(resposta.data);
            navigate("/home");
        });
        promessa.catch((err) => {
            alert("Credenciais incorretas!");
            setEmail("");
            setSenha("");
            console.log(err);
        });
    }

    return (
        <>
            <Body>
                <Logotipo><h1>MyWallet</h1></Logotipo>
                <Credenciais>
                    <Formulario onSubmit={fazerLogin}>
                        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
                        <input type="password" required value={senha} onChange={(e) => setSenha(e.target.value)} placeholder='Senha'/>
                        <Botao type="submit"><p>Entrar</p></Botao>
                    </Formulario>
                </Credenciais>
                <Cadastro>
                    <Link to="/SignUp">
                        <p>Primeira vez? Cadastre-se!</p>
                    </Link>
                </Cadastro>
            </Body>
        </>
    )
}

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

const Body = styled.div`
    background-color: #8C11BE;
    height: 100vh;
    width: 100vw;
    overflow-y: scroll;
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

const Cadastro = styled.div`
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
