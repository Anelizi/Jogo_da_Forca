import styled from "styled-components";
import Letra from "./Letra";


export default function Letras({ativarBotao}){

    const alfabeto = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i",
        "j", "k", "l", "m", "n", "o", "p", "q", "r",
        "s", "t", "u", "v", "w", "x", "y", "z"]

    return(
        <Container>
            <Style>
             {alfabeto.map((a)=><Letra  ativarBotao={ativarBotao} key={alfabeto} alfabeto={a}/>)}
            </Style>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    top: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    justify-items: center;
    font-family: 'Roboto';
`

const Style = styled.div`
    width: 650px;
    height: 100px;
    display: flex;
    flex-wrap: wrap;
`

