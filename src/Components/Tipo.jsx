import styled from "styled-components";
// import {useState} from "react";

export default function Tipo(props){
    const {valor, descricao, tipo} = props;
    return (
        <>
            <div>

                {tipo === "out"? <Out>
                    <p>{descricao}</p>
                    <h2>{valor}</h2>
                </Out> : 
                <In>
                    <p>{descricao}</p>
                    <h2>{valor}</h2>
                </In>}
            </div>
        </>
    )
}

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