import { useState } from "react";
import styled from "styled-components"
import imagem from "../assets/forca0.png"

export default function Jogo({palavras, ativarBotao, setAtivarBotao}){

    const [palavraSorteada, setPalavraSorteada] = useState(palavras[Math.floor(Math.random() * palavras.length)]);

    const traco = ' _'.repeat(palavraSorteada.length);

    function comecarJogo(){
        setAtivarBotao(true);
    }

    return(
        <Style>
             <Container>           
                <Img src={imagem}/>
                <div>
                    <Button onClick={comecarJogo}>Escolher Palavra</Button>
                    <H1>{comecarJogo ? traco : ""}</H1>
                </div>
            </Container>
        </Style>
    )
}

const Style = styled.div`
    position: relative;
    width: 85%;
    height: 100%;
    align-items: center;
    margin: auto;
    top: 30px;
    left: 0;
    right: 0;
    font-family: 'Roboto';
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const Img = styled.img`
    width: 400px;
    height: 467px;
`

const Button = styled.button`
    position: absolute;
    width: 200px;
    height: 60px;
    top: 40px;
    right: 40px;
    border-radius: 8px;
    background-color: #27AE60;
    color: #ffffff;
    border: none;
    font-weight: 700;
    cursor: pointer;
`

const H1 = styled.h1`
    position: absolute;
    font-size: 50px;
    font-weight: 700;
    bottom: 40px;
    right: 40px;
    color: aquamarine;
`