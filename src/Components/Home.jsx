import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import UserContext from "../Contexts/UserContext";
import Tipo from "./Tipo";

export default function Home() {
    const { token } = useContext(UserContext);
    const [historico, setHistorico] = useState([{ name: "", balance: 0 }]);
    const [flag, setFlag] = useState([null]);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.get("http://172.27.45.208:5000/historic", config);
        promise.then((resposta) => {
            setHistorico(resposta.data);
            setFlag(resposta.data.transaction);
        });
        promise.catch((err) => {
            console.log(err);
        });
    }, [token]);

    console.log(historico)

    return flag.length < 2 ? (
        <>
            <Body>
                <Header>
                    <h1>Olá, {historico.name}</h1>
                    <ion-icon name="log-out-outline"></ion-icon>
                </Header>
                <Extrato>
                    <SemRegistros>
                        <p>Não há registros de entrada ou saída</p>
                    </SemRegistros>
                </Extrato>
                <Footer>
                    <Link to={"/Entrada"}>
                        <Entrada>
                            <ion-icon name="add-circle-outline"></ion-icon>
                            <p>Nova entrada</p>
                        </Entrada>
                    </Link>
                    <Link to={"/Saida"}>
                        <Saida>
                            <ion-icon name="remove-circle-outline"></ion-icon>
                            <p>Nova saida</p>
                        </Saida>
                    </Link>
                </Footer>
            </Body>
        </>
    )
        :
        (
            <>
                <Body>
                    <Header>
                        <h1>Olá, {historico.name}</h1>
                        <ion-icon name="log-out-outline"></ion-icon>
                    </Header>
                    <Extrato>
                        <Registros>
                            {flag.map((item) => {
                                if (item.type === "in") {
                                    return (
                                        <div>
                                            <In>
                                                <p>{item.describe}</p>
                                                <h2>{item.value}</h2>
                                            </In>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div>
                                            <Out>
                                                <p>{item.describe}</p>
                                                <h2>{item.value}</h2>
                                            </Out>
                                        </div>
                                    )
                                }
                            })
                            }
                        </Registros>
                    </Extrato>
                    <Footer>
                        <Link to={"/Entrada"}>
                            <Entrada>
                                <ion-icon name="add-circle-outline"></ion-icon>
                                <p>Nova entrada</p>
                            </Entrada>
                        </Link>
                        <Link to={"/Saida"}>
                            <Saida>
                                <ion-icon name="remove-circle-outline"></ion-icon>
                                <p>Nova saida</p>
                            </Saida>
                        </Link>
                    </Footer>
                </Body>
            </>
        )
}

const In = styled.div`
    /* display: flex;
    justify-content: space-between; */
    box-sizing: border-box;
    padding: 10px;
    p{
        font-family: 'Raleway', sans-serif;
        font-size: 16px;
        color: #000;
    }

    h2{
        font-family: 'Raleway', sans-serif;
        font-size: 16px;
        color: #03AC00;
    }
`
const Out = styled.div`
    /* display: flex;
    justify-content: space-between; */
    box-sizing: border-box;
    padding: 10px;
    p{
        font-family: 'Raleway', sans-serif;
        font-size: 16px;
        color: #000;
    }

    h2{
        font-family: 'Raleway', sans-serif;
        font-size: 16px;
        color: #C70000;
    }
`

const Footer = styled.footer`
    height: 120px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 20px;
    box-sizing: border-box;
    padding: 30px;
    margin-bottom: 10px;
`

const Saida = styled.div`
    width: 155px;
    height: 114px;
    background-color: #A328D6;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;

    p{
        font-family: 'Raleway', sans-serif;
        font-size: 17px;
        font-weight: 700;
        color: #fff;
        margin-top: 50px;
    }

    ion-icon{
        color: #fff;
        font-size: 25px;
    }
`

const Entrada = styled.div`
    width: 155px;
    height: 114px;
    background-color: #A328D6;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    p{
        font-family: 'Raleway', sans-serif;
        font-size: 17px;
        font-weight: 700;
        color: #fff;
        margin-top: 50px;
    }

    ion-icon{
        color: #fff;
        font-size: 25px;
    }
`

const Extrato = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

const SemRegistros = styled.div`
    height: 446px;
    width: 326px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    
    p{
        width: 180px;
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
        color: #868686;
        text-align: center;
    }
`

const Registros = styled.div`
    height: 446px;
    width: 326px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    div {
        display: flex;
    }
`

const Header = styled.header`
    height: 56px;
    display: flex;
    padding-left: 24px;
    align-items: center;
    position: relative;
    margin-top: 5px;
    
    ion-icon{
        font-size: 30px;
        color: #FFFFFF;
        position: absolute;
        top: 20%;
        right: 20px;
    }

    h1{
        font-family: 'Raleway', sans-serif;
        font-size: 26px;
        color: #FFFFFF;
        font-weight: 700;
    }

`

const Body = styled.div`
    background-color: #8C11BE;
    height: 100vh;
    width: 100vw;
    overflow-y: scroll;
`